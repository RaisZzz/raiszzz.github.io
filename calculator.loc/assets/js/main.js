document.addEventListener('DOMContentLoaded', function() {
    // Настройки
    const MAX_PASSENGERS = 4 // Максимальное число пассажиров
    const MAX_MOVERS = 4 // Максимальное число грузчиков
    let DURATION = 1 // Изначальная длительность
    let DATETIME = new Date()
    DATETIME.setMinutes(DATETIME.getMinutes() + 15) // Изначальные дата и время (текущие + 15 минут)
    let PASSENGERS = 0 // Изначальное количество пассажиров
    let MOVERS = 0 // Изначальное количество грузчиков
    let FROM = '' // Изначальный адрес "откуда"
    let TO = '' // Изначальный адрес "Куда"
    let TYPE = null // Тип кузова
    let PROMO = null // Промокод
    const MAX_PROMO = 20 // Максимальная длина промокода
    const MIN_PROMO = 3 // Минимальная длина промокода
    const usersession = md5(Date.now())


    // Получение HTML элементов
    const $addressWrapper = document.getElementById('address-wrapper')
    const $from = document.getElementById('from')
    const $to = document.getElementById('to')
    const $durationWrapper = document.getElementById('duration-wrapper')
    const $duration = document.getElementById('duration')
    const $durationMinus = document.getElementById('duration-minus')
    const $durationPlus = document.getElementById('duration-plus')
    const $typesWrapper = document.getElementById('types-wrapper')
    const $types = document.querySelectorAll('.calculator-type__btn-input')
    const $typesDesc = document.querySelectorAll('.calculator-type__description')
    const $peoplesWrapper = document.getElementById('peoples-wrapper')
    const $passengers = document.getElementById('passengers')
    const $passengersMinus = document.getElementById('passengers-minus')
    const $passengersPlus = document.getElementById('passengers-plus')
    const $movers = document.getElementById('movers')
    const $moversMinus = document.getElementById('movers-minus')
    const $moversPlus = document.getElementById('movers-plus')
    const $datetimeWrapper = document.getElementById('datetime-wrapper')
    const $datetimeInput = document.getElementById('datetime')
    const $date = document.getElementById('date')
    const $time = document.getElementById('time')
    const $phoneWrapper = document.getElementById('phone-wrapper')
    const $phone = document.getElementById('phone')
    const $promoWrapper = document.getElementById('promo-wrapper')
    const $promo = document.getElementById('promo')
    const $total = document.getElementById('total')
    const $submit = document.getElementById('submit')
    const $orderedPopup = document.getElementById('calculator-ordered')

    // Инициализация
    let fromChecked = false
    let toChecked = false
    if (DURATION < 1) DURATION = 1
    setDuration()
    setDateTime()
    $datetimeInput.min = DATETIME.toISOString().split(".")[0].substring(DATETIME.toISOString().split(".")[0].length - 3, 0)
    if (PASSENGERS < 0) PASSENGERS = 0
    setPassengers()
    if (MOVERS < 0) MOVERS = 0
    setMovers()
    let phoneValid = false
    let isLoading = false


    // Логика

    // Адрес
    $from.addEventListener('focusin', function() {
        $addressWrapper.classList.add('active')
    })
    $from.addEventListener('focusout', function() {
        $addressWrapper.classList.remove('active')
    })
    $to.addEventListener('focusin', function() {
        $addressWrapper.classList.add('active')
    })
    $to.addEventListener('focusout', function() {
        $addressWrapper.classList.remove('active')
    })
    $from.addEventListener('input', function () {
        FROM = $from.value
        fromChecked = true
        if ((FROM.length <= 0 || TO.length <= 0) && fromChecked && toChecked) {
            $addressWrapper.classList.add('error')
        } else {
            $addressWrapper.classList.remove('error')
        }
        checkForm()
    })
    $to.addEventListener('input', function () {
        TO = $to.value
        toChecked = true
        if ((FROM.length <= 0 || TO.length <= 0) && fromChecked && toChecked) {
            $addressWrapper.classList.add('error')
        } else {
            $addressWrapper.classList.remove('error')
        }
        checkForm()
    })

    // Длительность
    $durationMinus.addEventListener('focusin', function() {
        $durationWrapper.classList.add('active')
        $durationMinus.classList.add('active')
        $durationPlus.classList.add('active')
    })
    $durationMinus.addEventListener('focusout', function() {
        $durationWrapper.classList.remove('active')
        $durationMinus.classList.remove('active')
        $durationPlus.classList.remove('active')
    })
    $durationPlus.addEventListener('focusin', function() {
        $durationWrapper.classList.add('active')
        $durationMinus.classList.add('active')
        $durationPlus.classList.add('active')
    })
    $durationPlus.addEventListener('focusout', function() {
        $durationWrapper.classList.remove('active')
        $durationMinus.classList.remove('active')
        $durationPlus.classList.remove('active')
    })
    $durationMinus.addEventListener('click', function() {
        if ((DURATION - 1) > 0) {
            DURATION -= 1
        }
        setDuration()
    })
    $durationPlus.addEventListener('click', function() {
        DURATION += 1
        setDuration()
    })

    // Дата и время
    $datetimeInput.addEventListener('focusin', function() {
        $datetimeWrapper.classList.add('active')
    })
    $datetimeInput.addEventListener('focusout', function() {
        $datetimeWrapper.classList.remove('active')
    })
    $datetimeInput.addEventListener('input', function() {
        if (!$datetimeInput.value || new Date($datetimeInput.value) < new Date()) {
            DATETIME = new Date()
            DATETIME.setMinutes(DATETIME.getMinutes() + 15)
        } else {
            DATETIME = new Date($datetimeInput.value)
        }
        setDateTime()
    })

    // Тип кузова
    $types.forEach(typeBtn => {
        typeBtn.addEventListener('focusin', function() {
            $typesWrapper.classList.add('active')
        })
        typeBtn.addEventListener('focusout', function() {
            $typesWrapper.classList.remove('active')
        })
        typeBtn.addEventListener('input', function() {
            $typesDesc.forEach(desc => {
                if (desc.dataset.type === typeBtn.dataset.type) {
                    desc.classList.add('active')
                    TYPE = parseInt(desc.dataset.type)
                    checkForm()
                } else {
                    desc.classList.remove('active')
                }
            })
        })
    })

    // Пассажиры
    $passengersMinus.addEventListener('focusin', function() {
        $peoplesWrapper.classList.add('active')
    })
    $passengersMinus.addEventListener('focusout', function() {
        $peoplesWrapper.classList.remove('active')
    })
    $passengersPlus.addEventListener('focusin', function() {
        $peoplesWrapper.classList.add('active')
    })
    $passengersPlus.addEventListener('focusout', function() {
        $peoplesWrapper.classList.remove('active')
    })
    $moversMinus.addEventListener('focusin', function() {
        $peoplesWrapper.classList.add('active')
    })
    $moversMinus.addEventListener('focusout', function() {
        $peoplesWrapper.classList.remove('active')
    })
    $moversPlus.addEventListener('focusin', function() {
        $peoplesWrapper.classList.add('active')
    })
    $moversPlus.addEventListener('focusout', function() {
        $peoplesWrapper.classList.remove('active')
    })
    $passengersMinus.addEventListener('click', function() {
        if ((PASSENGERS - 1) >= 0) {
            PASSENGERS -= 1
        }
        setPassengers()
    })
    $passengersPlus.addEventListener('click', function() {
        if ((PASSENGERS + 1) <= MAX_PASSENGERS) {
            PASSENGERS += 1
        }
        setPassengers()
    })
    $moversMinus.addEventListener('click', function() {
        if ((MOVERS - 1) >= 0) {
            MOVERS -= 1
        }
        setMovers()
    })
    $moversPlus.addEventListener('click', function() {
        if ((MOVERS + 1) <= MAX_MOVERS) {
            MOVERS += 1
        }
        setMovers()
    })

    // Номер телефона
    $phoneWrapper.addEventListener('click', function() {
        $phone.focus()
    })
    $phone.addEventListener('input', setPhone, false)
    $phone.addEventListener('focus', setPhone, false)
    $phone.addEventListener('blur', setPhone, false)
    $phone.addEventListener('keydown', setPhone, false)

    // Промокод
    $promoWrapper.addEventListener('click', function() {
        $promo.focus()
    })
    $promo.addEventListener('focusin', function() {
        $promoWrapper.classList.add('active')
    })
    $promo.addEventListener('focusout', function() {
        $promoWrapper.classList.remove('active')
        if ($promo.value.length < MIN_PROMO) {
            $promoWrapper.classList.add('error')
        } else {
            $promoWrapper.classList.remove('error')
        }
    })
    $promo.addEventListener('input', function() {
        if ($promo.value.length >= MAX_PROMO) {
            $promo.value = $promo.value.substring(0, MAX_PROMO)
        }
        if ($promo.value.length >= MIN_PROMO) {
            $promoWrapper.classList.remove('error')
        }
        PROMO = $promo.value
        checkForm()
    })

    // Оформление заказа
    $submit.addEventListener('click', async function () {
        let day = DATETIME.getDate()
        let month = DATETIME.getMonth() + 1
        const year = DATETIME.getFullYear()
        let hours = DATETIME.getHours()
        let minutes = DATETIME.getMinutes()
        if (day < 10) day = `0${day}`
        if (month < 10) month = `0${month}`
        if (hours < 10) hours = `0${hours}`
        if (minutes < 10) minutes = `0${minutes}`
        const date_from = `${year}-${month}-${day}`
        const time_from = `${hours}:${minutes}`
        const phone = parseInt($phone.value.replace(/[^0-9]/g, ""))

        if (!isLoading) {
            isLoading = true
            const response = await axios.get('https://apps.itlogist.ru/api/v1/all/srochno_order_add/', {
                params: {
                    address_from: FROM,
                    address_to: TO,
                    duration: DURATION,
                    date_from,
                    time_from,
                    vehicle_type: TYPE,
                    passengers_number: PASSENGERS,
                    loaders_number: MOVERS,
                    phone,
                    promocode: PROMO,
                    usersession
                }
            })
            if (response.data.order_processed) {
                $orderedPopup.classList.add('active')
            }
            isLoading = false
        }
    })

    // Проверка всех полей
    function checkForm() {
        setTimeout(async () => {
            if (!FROM.length || !TO.length || !TYPE || !phoneValid) {
                $submit.setAttribute('disabled', 'true')
            } else {
                let day = DATETIME.getDate()
                let month = DATETIME.getMonth() + 1
                const year = DATETIME.getFullYear()
                let hours = DATETIME.getHours()
                let minutes = DATETIME.getMinutes()
                if (day < 10) day = `0${day}`
                if (month < 10) month = `0${month}`
                if (hours < 10) hours = `0${hours}`
                if (minutes < 10) minutes = `0${minutes}`
                const date_from = `${year}-${month}-${day}`
                const time_from = `${hours}:${minutes}`
                const phone = parseInt($phone.value.replace(/[^0-9]/g,""))

                if (!isLoading) {
                    isLoading = true
                    const response = await axios.get('https://apps.itlogist.ru/api/v1/all/srochno_calc/', {
                        params: {
                            address_from: FROM,
                            address_to: TO,
                            duration: DURATION,
                            date_from,
                            time_from,
                            vehicle_type: TYPE,
                            passengers_number: PASSENGERS,
                            loaders_number: MOVERS,
                            phone,
                            promocode: PROMO,
                            usersession
                        }
                    })
                    if (response.data.delivery_possibility === 1) {
                        $submit.removeAttribute('disabled')
                    } else {
                        $submit.setAttribute('disabled', 'true')
                    }
                    if (response.data.cost_of_delivery) {
                        $total.innerText = `${response.data.cost_of_delivery} ₽`
                    } else {
                        $total.innerText = ''
                    }
                    isLoading = false
                }
            }
        }, 100)
    }


    // Вставка значений в HTML
    function setDuration() {
        $duration.innerText = DURATION
        checkForm()
    }
    function setDateTime() {
        let day = DATETIME.getDate()
        let month = DATETIME.getMonth() + 1
        const year = DATETIME.getFullYear()
        let hours = DATETIME.getHours()
        let minutes = DATETIME.getMinutes()
        if (day < 10) day = `0${day}`
        if (month < 10) month = `0${month}`
        if (hours < 10) hours = `0${hours}`
        if (minutes < 10) minutes = `0${minutes}`

        $date.innerText = `${day}.${month}.${year}`
        $time.innerText = `${hours}:${minutes}`
        checkForm()
    }
    function setPassengers() {
        $passengers.innerText = PASSENGERS
        checkForm()
    }
    function setMovers() {
        $movers.innerText = MOVERS
        checkForm()
    }
    let keyCode
    function setPhone(event) {
        $phoneWrapper.classList.add('active')
        event.keyCode && (keyCode = event.keyCode);
        const pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i !== -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substring(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value
            if (event.type !== 'blur' && matrix.length !== this.value.length) {
                setTimeout(() => {
                    $phone.selectionStart = this.value.length
                }, 100)
            }
        }
        if (event.type === 'blur' && this.value.length < 5) {
            this.value = ""
        }
        if (event.type === 'blur') {
            $phoneWrapper.classList.remove('active')
        }
        if (event.type === 'blur' && matrix.length !== this.value.length) {
            $phoneWrapper.classList.add('error')
        } else {
            $phoneWrapper.classList.remove('error')
            if (!phoneValid) {
                phoneValid = true
                checkForm()
            }
        }
        phoneValid = matrix.length === this.value.length
    }
})

const md5 = function(d){d=unescape(encodeURIComponent(d));result=M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}var result=md5('Lorem Ipsum is simply dummy text of the printing');var result=md5('Прародителем текста-рыбы является известный "Lorem Ipsum"');
