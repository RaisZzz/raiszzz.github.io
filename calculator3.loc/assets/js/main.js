document.addEventListener('DOMContentLoaded', function () {
    // Настройки
    const MAX_PASSENGERS = 4 // Максимальное число пассажиров
    const MAX_MOVERS = 4 // Максимальное число грузчиков
    let DURATION = 0.5 // Изначальная длительность
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
    const ADDRESS_TRANSITION = 1500 // Задержка между запросами списка адресов (в миллисекундах)

    // Placeholders
    const from_placeholder = 'Откуда'
    const to_placeholder = 'Куда'
    const promo_placeholder = 'Промокод'


    // Получение HTML элементов
    const $firstStep = document.getElementById('first-step')
    const $secondStep = document.getElementById('second-step')
    const $calculator = document.getElementById('calculator')
    const $calculator2 = document.getElementById('calculator2')
    const $addressWrapper = document.getElementById('address-wrapper')
    const $from = document.getElementById('from')
    const $fromList = document.getElementById('from-list')
    const $to = document.getElementById('to')
    const $toList = document.getElementById('to-list')
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
    const $total = document.querySelectorAll('.total__value')
    const $submit = document.getElementById('submit')
    const $orderedPopup = document.getElementById('calculator-ordered')
    const $check = document.getElementById('check')
    const $nextBtn = document.getElementById('next')
    const $moreBtn = document.getElementById('order-more')

    // Инициализация
    $secondStep.classList.remove('active')
    $firstStep.classList.add('active')
    let valuesChanged = false
    let fromChecked = false
    let toChecked = false
    if (DURATION <= 0) DURATION = 1
    setDuration()
    setDateTime()
    $datetimeInput.min = DATETIME.toISOString().split(".")[0].substring(DATETIME.toISOString().split(".")[0].length - 3, 0)
    if (PASSENGERS < 0) PASSENGERS = 0
    setPassengers()
    if (MOVERS < 0) MOVERS = 0
    setMovers()
    let phoneValid = false
    let isLoading = false
    $from.placeholder = from_placeholder
    $to.placeholder = to_placeholder
    $promo.placeholder = promo_placeholder
    checkSize()
    for (let i = 1; i <= 10; i++) {
        setTimeout(checkSize, i * 100)
    }
    window.addEventListener('resize', function () {
        for (let i = 1; i <= 10; i++) {
            setTimeout(checkSize, i * 10)
        }
    })
    $types[1].setAttribute('checked', 'checked')
    $typesDesc[1].classList.add('active')
    TYPE = parseInt($typesDesc[1].dataset.type)
    valuesChanged = false

    // Логика

    // Шаг
    $nextBtn.addEventListener('click', function() {
        $firstStep.classList.remove('active')
        $secondStep.classList.add('active')
    })

    $moreBtn.addEventListener('click', function() {
        DURATION = 0.5
        DATETIME = new Date()
        DATETIME.setMinutes(DATETIME.getMinutes() + 15)
        MOVERS = 0
        PASSENGERS = 0
        $total.forEach(el => {
            el.innerText = ''
        })

        FROM = ''
        TO = ''
        PROMO = null

        $from.value = ''
        $to.value = ''
        $promo.value = ''

        $from.placeholder = from_placeholder
        $to.placeholder = to_placeholder
        $promo.placeholder = promo_placeholder

        setDuration()
        setDateTime()
        setMovers()
        setPassengers()

        $secondStep.classList.remove('active')
        $firstStep.classList.add('active')
        $orderedPopup.classList.remove('active')
    })

    // Адрес
    let ADDRESS_SEARCHING = false
    let FROM_ADDRESSES = {}
    let TO_ADDRESSES = {}
    let FROM_LAT = null
    let FROM_LNG = null
    let TO_LAT = null
    let TO_LNG = null
    $from.addEventListener('focusin', function () {
        $addressWrapper.classList.add('active')
        if (Object.keys(FROM_ADDRESSES).length > 0) {
            $from.classList.add('rounded')
            $fromList.classList.add('active')
        }
        $from.placeholder = ''
    })
    $from.addEventListener('focusout', function () {
        $addressWrapper.classList.remove('active')
        $from.placeholder = from_placeholder
        setTimeout(() => {
            if (!FROM_FIN || !FROM_FIN.length) {
                $addressWrapper.querySelectorAll('.calculator__address-input-container')[0].classList.add('error')
                $from.classList.remove('rounded')
                $fromList.classList.remove('active')
            }
            checkForm()
        }, 101)
    })
    $to.addEventListener('focusin', function () {
        $addressWrapper.classList.add('active')
        if (Object.keys(TO_ADDRESSES).length > 0) {
            $to.classList.add('rounded')
            $toList.classList.add('active')
        }
        $to.placeholder = ''
    })
    $to.addEventListener('focusout', function () {
        $addressWrapper.classList.remove('active')
        $to.placeholder = to_placeholder
        setTimeout(() => {
            if (!TO_FIN || !TO_FIN.length) {
                $addressWrapper.querySelectorAll('.calculator__address-input-container')[1].classList.add('error')
                $to.classList.remove('rounded')
                $toList.classList.remove('active')
            }
            checkForm()
        }, 101)
    })
    let FROM_FIN = null
    let fromTimeout = null
    $from.addEventListener('input', async function () {
        clearTimeout(fromTimeout)
        $from.classList.remove('rounded')
        $fromList.classList.remove('active')
        $fromList.innerHTML = ''
        $addressWrapper.querySelectorAll('.calculator__address-input-container')[0].classList.remove('error')
        $addressWrapper.querySelectorAll('.calculator__address-input-container')[1].classList.remove('error')
        FROM = $from.value
        FROM_LAT = null
        FROM_LNG = null
        FROM_FIN = null
        if ((FROM.length <= 0 || TO.length <= 0) && fromChecked && toChecked) {
            $addressWrapper.querySelectorAll('.calculator__address-input-container')[0].classList.add('error')
        } else {
            $addressWrapper.querySelectorAll('.calculator__address-input-container')[0].classList.remove('error')
            $addressWrapper.querySelectorAll('.calculator__address-input-container')[1].classList.remove('error')
        }
        if (FROM.length >= 5) {
            fromTimeout = setTimeout(fromParse, 1500)
        }
    })
    async function fromParse() {
        FROM_ADDRESSES = await getAddresses(FROM)
        if (FROM_ADDRESSES && Object.keys(FROM_ADDRESSES).length > 0) {
            $fromList.innerHTML = ''
            $fromList.classList.add('active')
            $from.classList.add('rounded')
            for (const value of Object.values(FROM_ADDRESSES)) {
                const li = document.createElement('button')
                li.className = 'calculator__addresses-list__item'
                li.innerText = value['address2']
                li.addEventListener('focusin', click)
                li.addEventListener('click', click)
                li.addEventListener('touchstart', click)
                li.addEventListener('mousedown', click)
                $fromList.append(li)


                async function click() {
                    FROM_FIN = value['address2']
                    FROM = value['address2']
                    $from.value = value['address2']
                    $from.classList.remove('rounded')
                    $fromList.classList.remove('active')
                    $fromList.innerHTML = ''
                    FROM_ADDRESSES = {}
                    const response = await axios.get('https://apps.itlogist.ru/api/v1/all/srochno_geocode/', {
                        params: {
                            address: value['address2']
                        }
                    })
                    FROM_LAT = response.data.lat
                    FROM_LNG = response.data.lng
                    $addressWrapper.querySelectorAll('.calculator__address-input-container')[0].classList.remove('error')
                    $addressWrapper.querySelectorAll('.calculator__address-input-container')[1].classList.remove('error')
                    valuesChanged = true
                    checkForm()
                }
            }
        } else {
            $from.classList.remove('rounded')
            $fromList.classList.remove('active')
            $fromList.innerHTML = ''
            checkForm()
        }
    }
    let TO_FIN = null
    let toTimeout = null
    $to.addEventListener('input', async function () {
        clearTimeout(toTimeout)
        $to.classList.remove('rounded')
        $toList.classList.remove('active')
        $toList.innerHTML = ''
        $addressWrapper.querySelectorAll('.calculator__address-input-container')[0].classList.remove('error')
        $addressWrapper.querySelectorAll('.calculator__address-input-container')[1].classList.remove('error')
        TO = $to.value
        toChecked = true
        TO_LAT = null
        TO_LNG = null
        TO_FIN = null
        if ((FROM.length <= 0 || TO.length <= 0) && fromChecked && toChecked) {
            $addressWrapper.querySelectorAll('.calculator__address-input-container')[1].classList.add('error')
        } else {
            $addressWrapper.querySelectorAll('.calculator__address-input-container')[0].classList.remove('error')
            $addressWrapper.querySelectorAll('.calculator__address-input-container')[1].classList.remove('error')
        }
        if (TO.length >= 5) {
            toTimeout = setTimeout(toParse, 1500)
        }
    })
    async function toParse() {
        TO_ADDRESSES = await getAddresses(TO)
        if (TO_ADDRESSES && Object.keys(TO_ADDRESSES).length > 0) {
            $toList.innerHTML = ''
            $toList.classList.add('active')
            $to.classList.add('rounded')
            for (const value of Object.values(TO_ADDRESSES)) {
                const li = document.createElement('button')
                li.className = 'calculator__addresses-list__item'
                li.innerText = value['address2']
                li.addEventListener('focusin', click)
                li.addEventListener('click', click)
                li.addEventListener('touchstart', click)
                li.addEventListener('mousedown', click)
                $toList.append(li)

                async function click() {
                    TO_FIN = value['address2']
                    TO = value['address2']
                    $to.value = value['address2']
                    $to.classList.remove('rounded')
                    $toList.classList.remove('active')
                    $toList.innerHTML = ''
                    TO_ADDRESSES = {}
                    const response = await axios.get('https://apps.itlogist.ru/api/v1/all/srochno_geocode/', {
                        params: {
                            address: value['address2']
                        }
                    })
                    TO_LAT = response.data.lat
                    TO_LNG = response.data.lng
                    $addressWrapper.classList.remove('error')
                    valuesChanged = true
                    checkForm()
                }
            }
        } else {
            $to.classList.remove('rounded')
            $toList.classList.remove('active')
            $toList.innerHTML = ''
            checkForm()
        }
    }

    async function getAddresses(value) {
        if (value.length >= 5) {
            ADDRESS_SEARCHING = true
            setTimeout(() => {
                ADDRESS_SEARCHING = false
            }, ADDRESS_TRANSITION)
            const response = await axios.get('https://apps.itlogist.ru/api/v1/all/srochno_search_address/', {
                params: {
                    address: value
                }
            })
            return response.data.address_list
        }
    }

    // Длительность
    $durationMinus.addEventListener('focusin', function () {
        $durationWrapper.classList.add('active')
        $durationMinus.classList.add('active')
        $durationPlus.classList.add('active')
    })
    $durationMinus.addEventListener('focusout', function () {
        $durationWrapper.classList.remove('active')
        $durationMinus.classList.remove('active')
        $durationPlus.classList.remove('active')
    })
    $durationPlus.addEventListener('focusin', function () {
        $durationWrapper.classList.add('active')
        $durationMinus.classList.add('active')
        $durationPlus.classList.add('active')
    })
    $durationPlus.addEventListener('focusout', function () {
        $durationWrapper.classList.remove('active')
        $durationMinus.classList.remove('active')
        $durationPlus.classList.remove('active')
    })
    $durationMinus.addEventListener('click', function () {
        if ((DURATION - 1) > 0) {
            DURATION -= 1
        } else if ((DURATION - 1) === 0) {
            DURATION = 0.5
        }
        setDuration()
    })
    $durationPlus.addEventListener('click', function () {
        if (DURATION === 0.5) {
            DURATION = 1
        } else {
            DURATION += 1
        }
        setDuration()
    })

    // Дата и время
    $datetimeInput.addEventListener('focusin', function () {
        $datetimeWrapper.classList.add('active')
    })
    $datetimeInput.addEventListener('focusout', function () {
        $datetimeWrapper.classList.remove('active')
    })
    $datetimeInput.addEventListener('input', function () {
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
        typeBtn.addEventListener('focusin', function () {
            $typesWrapper.classList.add('active')
        })
        typeBtn.addEventListener('focusout', function () {
            $typesWrapper.classList.remove('active')
        })
        typeBtn.addEventListener('input', function () {
            $typesDesc.forEach(desc => {
                if (desc.dataset.type === typeBtn.dataset.type) {
                    desc.classList.add('active')
                    TYPE = parseInt(desc.dataset.type)
                    valuesChanged = true
                    checkForm()
                } else {
                    desc.classList.remove('active')
                }
            })
        })
    })

    // Пассажиры
    $passengersMinus.addEventListener('focusin', function () {
        $peoplesWrapper.classList.add('active')
    })
    $passengersMinus.addEventListener('focusout', function () {
        $peoplesWrapper.classList.remove('active')
    })
    $passengersPlus.addEventListener('focusin', function () {
        $peoplesWrapper.classList.add('active')
    })
    $passengersPlus.addEventListener('focusout', function () {
        $peoplesWrapper.classList.remove('active')
    })
    $moversMinus.addEventListener('focusin', function () {
        $peoplesWrapper.classList.add('active')
    })
    $moversMinus.addEventListener('focusout', function () {
        $peoplesWrapper.classList.remove('active')
    })
    $moversPlus.addEventListener('focusin', function () {
        $peoplesWrapper.classList.add('active')
    })
    $moversPlus.addEventListener('focusout', function () {
        $peoplesWrapper.classList.remove('active')
    })
    $passengersMinus.addEventListener('click', function () {
        if ((PASSENGERS - 1) >= 0) {
            PASSENGERS -= 1
        }
        setPassengers()
    })
    $passengersPlus.addEventListener('click', function () {
        if ((PASSENGERS + 1) <= MAX_PASSENGERS) {
            PASSENGERS += 1
        }
        setPassengers()
    })
    $moversMinus.addEventListener('click', function () {
        if ((MOVERS - 1) >= 0) {
            MOVERS -= 1
        }
        setMovers()
    })
    $moversPlus.addEventListener('click', function () {
        if ((MOVERS + 1) <= MAX_MOVERS) {
            MOVERS += 1
        }
        setMovers()
    })

    // Номер телефона
    $phoneWrapper.addEventListener('click', function () {
        $phone.focus()
    })
    $phone.addEventListener('input', setPhone, false)
    $phone.addEventListener('focus', setPhone, false)
    $phone.addEventListener('blur', setPhone, false)
    $phone.addEventListener('keydown', setPhone, false)

    // Промокод
    $promoWrapper.addEventListener('click', function () {
        $promo.focus()
    })
    $promo.addEventListener('focusin', function () {
        $promoWrapper.classList.add('active')
        $promo.placeholder = ''
    })
    $promo.addEventListener('focusout', async function () {
        $promoWrapper.classList.remove('active')
        $promo.placeholder = promo_placeholder
        if ($promo.value.length < MIN_PROMO) {
            if ($promo.value.length > 0) {
                $promoWrapper.classList.add('error')
            } else {
                $promoWrapper.classList.remove('error')
            }
            $promoWrapper.classList.remove('success')
        } else {
            const response = await axios.get('https://apps.itlogist.ru/api/v1/all/srochno_promocode_check/', {
                params: {
                    promocode: PROMO,
                    usersession
                }
            })
            if (response.data.promocode_valid) {
                $promoWrapper.classList.remove('error')
                $promoWrapper.classList.add('success')
            } else {
                $promoWrapper.classList.add('error')
                $promoWrapper.classList.remove('success')
            }
        }
        checkForm()
    })
    $promo.addEventListener('input', function () {
        $promoWrapper.classList.remove('success')
        if ($promo.value.length >= MAX_PROMO) {
            $promo.value = $promo.value.substring(0, MAX_PROMO)
        }
        if ($promo.value.length >= MIN_PROMO) {
            $promoWrapper.classList.remove('error')
        }
        PROMO = $promo.value
        valuesChanged = true
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
                    address_from: FROM_FIN,
                    address_to: TO_FIN,
                    duration: DURATION,
                    date_from,
                    time_from,
                    vehicle_type: TYPE,
                    passengers_number: PASSENGERS,
                    loaders_number: MOVERS,
                    phone,
                    promocode: PROMO,
                    usersession,
                    lat_from: FROM_LAT,
                    lng_from: FROM_LNG,
                    lat_to: TO_LAT,
                    lng_to: TO_LNG
                }
            })
            if (response.data.order_processed) {
                $orderedPopup.classList.add('active')

            }
            isLoading = false
        }
    })

    // Проверка всех полей
    let possibility = false
    function checkForm() {
        setTimeout(async () => {
            if (!TYPE || DURATION === undefined || MOVERS === undefined) {
                $total.forEach(el => {
                    el.innerText = ''
                })
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
                const phone = parseInt($phone.value.replace(/[^0-9]/g, ""))

                if (!isLoading) {
                    isLoading = true
                    if (valuesChanged) {
                        const response = await axios.get('https://apps.itlogist.ru/api/v1/all/srochno_calc/', {
                            params: {
                                address_from: FROM_FIN,
                                address_to: TO_FIN,
                                duration: DURATION,
                                date_from,
                                time_from,
                                vehicle_type: TYPE,
                                passengers_number: PASSENGERS,
                                loaders_number: MOVERS,
                                phone,
                                promocode: PROMO,
                                usersession,
                                lat_from: FROM_LAT,
                                lng_from: FROM_LNG,
                                lat_to: TO_LAT,
                                lng_to: TO_LNG
                            }
                        })
                        possibility = response.data.delivery_possibility
                        if (possibility === 1 && phoneValid && FROM_LAT && TO_LAT) {
                            $submit.removeAttribute('disabled')
                        } else {
                            $submit.setAttribute('disabled', 'true')
                        }
                        if (response.data.cost_of_delivery) {
                            $total.forEach(el => {
                                el.innerText = `${response.data.cost_of_delivery.toLocaleString()} ₽`
                            })
                        } else {
                            $total.forEach(el => {
                                el.innerText = ''
                            })
                        }
                        valuesChanged = false
                    } else {
                        if (possibility === 1 && phoneValid && FROM_LAT && TO_LAT) {
                            $submit.removeAttribute('disabled')
                        } else {
                            $submit.setAttribute('disabled', 'true')
                        }
                    }
                    isLoading = false
                }
            }
            // if (!$check.checked) {
            //     $submit.setAttribute('disabled', 'true')
            // }
        }, 100)
    }


    // Вставка значений в HTML
    function setDuration() {
        if (DURATION < 1) {
            $duration.innerText = `${DURATION * 60} мин`
        } else {
            $duration.innerText = `${DURATION} ч`
        }
        valuesChanged = true
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
        valuesChanged = true
        checkForm()
    }

    function setPassengers() {
        $passengers.innerText = PASSENGERS
        valuesChanged = true
        checkForm()
    }

    function setMovers() {
        $movers.innerText = MOVERS
        valuesChanged = true
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

    function checkSize() {
        let width = $calculator.clientWidth || $calculator2.clientWidth
        if (width <= 1230 && width > 900) {
            $calculator.classList.add('large')
            $calculator.classList.remove('medium')
            $calculator.classList.remove('small')
            $calculator.classList.remove('micro')

            $calculator2.classList.add('large')
            $calculator2.classList.remove('medium')
            $calculator2.classList.remove('small')
            $calculator2.classList.remove('micro')
        } else if (width <= 900 && width > 440) {
            $calculator.classList.add('large')
            $calculator.classList.add('medium')
            $calculator.classList.remove('small')
            $calculator.classList.remove('micro')

            $calculator2.classList.add('large')
            $calculator2.classList.add('medium')
            $calculator2.classList.remove('small')
            $calculator2.classList.remove('micro')
        } else if (width > 1230) {
            $calculator.classList.remove('large')
            $calculator.classList.remove('medium')
            $calculator.classList.remove('small')
            $calculator.classList.remove('micro')

            $calculator2.classList.remove('large')
            $calculator2.classList.remove('medium')
            $calculator2.classList.remove('small')
            $calculator2.classList.remove('micro')
        }
    }
})

const md5=function(a){return a=unescape(encodeURIComponent(a)),(result=M(V(Y(X(a),8*a.length)))).toLowerCase()};function M(b){for(var _,c="0123456789ABCDEF",d="",a=0;a<b.length;a++)_=b.charCodeAt(a),d+=c.charAt(_>>>4&15)+c.charAt(15&_);return d}function X(b){for(var _=Array(b.length>>2),a=0;a<_.length;a++)_[a]=0;for(a=0;a<8*b.length;a+=8)_[a>>5]|=(255&b.charCodeAt(a/8))<<a%32;return _}function V(b){for(var _="",a=0;a<32*b.length;a+=8)_+=String.fromCharCode(b[a>>5]>>>a%32&255);return _}function Y(e,_){e[_>>5]|=128<<_%32,e[14+(_+64>>>9<<4)]=_;for(var b=1732584193,a=-271733879,c=-1732584194,d=271733878,f=0;f<e.length;f+=16){var g=b,h=a,i=c,j=d;a=md5_ii(a=md5_ii(a=md5_ii(a=md5_ii(a=md5_hh(a=md5_hh(a=md5_hh(a=md5_hh(a=md5_gg(a=md5_gg(a=md5_gg(a=md5_gg(a=md5_ff(a=md5_ff(a=md5_ff(a=md5_ff(a,c=md5_ff(c,d=md5_ff(d,b=md5_ff(b,a,c,d,e[f+0],7,-680876936),a,c,e[f+1],12,-389564586),b,a,e[f+2],17,606105819),d,b,e[f+3],22,-1044525330),c=md5_ff(c,d=md5_ff(d,b=md5_ff(b,a,c,d,e[f+4],7,-176418897),a,c,e[f+5],12,1200080426),b,a,e[f+6],17,-1473231341),d,b,e[f+7],22,-45705983),c=md5_ff(c,d=md5_ff(d,b=md5_ff(b,a,c,d,e[f+8],7,1770035416),a,c,e[f+9],12,-1958414417),b,a,e[f+10],17,-42063),d,b,e[f+11],22,-1990404162),c=md5_ff(c,d=md5_ff(d,b=md5_ff(b,a,c,d,e[f+12],7,1804603682),a,c,e[f+13],12,-40341101),b,a,e[f+14],17,-1502002290),d,b,e[f+15],22,1236535329),c=md5_gg(c,d=md5_gg(d,b=md5_gg(b,a,c,d,e[f+1],5,-165796510),a,c,e[f+6],9,-1069501632),b,a,e[f+11],14,643717713),d,b,e[f+0],20,-373897302),c=md5_gg(c,d=md5_gg(d,b=md5_gg(b,a,c,d,e[f+5],5,-701558691),a,c,e[f+10],9,38016083),b,a,e[f+15],14,-660478335),d,b,e[f+4],20,-405537848),c=md5_gg(c,d=md5_gg(d,b=md5_gg(b,a,c,d,e[f+9],5,568446438),a,c,e[f+14],9,-1019803690),b,a,e[f+3],14,-187363961),d,b,e[f+8],20,1163531501),c=md5_gg(c,d=md5_gg(d,b=md5_gg(b,a,c,d,e[f+13],5,-1444681467),a,c,e[f+2],9,-51403784),b,a,e[f+7],14,1735328473),d,b,e[f+12],20,-1926607734),c=md5_hh(c,d=md5_hh(d,b=md5_hh(b,a,c,d,e[f+5],4,-378558),a,c,e[f+8],11,-2022574463),b,a,e[f+11],16,1839030562),d,b,e[f+14],23,-35309556),c=md5_hh(c,d=md5_hh(d,b=md5_hh(b,a,c,d,e[f+1],4,-1530992060),a,c,e[f+4],11,1272893353),b,a,e[f+7],16,-155497632),d,b,e[f+10],23,-1094730640),c=md5_hh(c,d=md5_hh(d,b=md5_hh(b,a,c,d,e[f+13],4,681279174),a,c,e[f+0],11,-358537222),b,a,e[f+3],16,-722521979),d,b,e[f+6],23,76029189),c=md5_hh(c,d=md5_hh(d,b=md5_hh(b,a,c,d,e[f+9],4,-640364487),a,c,e[f+12],11,-421815835),b,a,e[f+15],16,530742520),d,b,e[f+2],23,-995338651),c=md5_ii(c,d=md5_ii(d,b=md5_ii(b,a,c,d,e[f+0],6,-198630844),a,c,e[f+7],10,1126891415),b,a,e[f+14],15,-1416354905),d,b,e[f+5],21,-57434055),c=md5_ii(c,d=md5_ii(d,b=md5_ii(b,a,c,d,e[f+12],6,1700485571),a,c,e[f+3],10,-1894986606),b,a,e[f+10],15,-1051523),d,b,e[f+1],21,-2054922799),c=md5_ii(c,d=md5_ii(d,b=md5_ii(b,a,c,d,e[f+8],6,1873313359),a,c,e[f+15],10,-30611744),b,a,e[f+6],15,-1560198380),d,b,e[f+13],21,1309151649),c=md5_ii(c,d=md5_ii(d,b=md5_ii(b,a,c,d,e[f+4],6,-145523070),a,c,e[f+11],10,-1120210379),b,a,e[f+2],15,718787259),d,b,e[f+9],21,-343485551),b=safe_add(b,g),a=safe_add(a,h),c=safe_add(c,i),d=safe_add(d,j)}return Array(b,a,c,d)}function md5_cmn(a,_,b,c,d,e){return safe_add(bit_rol(safe_add(safe_add(_,a),safe_add(c,e)),d),b)}function md5_ff(a,_,b,c,d,e,f){return md5_cmn(_&b| ~_&c,a,_,d,e,f)}function md5_gg(b,_,c,a,d,e,f){return md5_cmn(_&a|c& ~a,b,_,d,e,f)}function md5_hh(a,_,b,c,d,e,f){return md5_cmn(_^b^c,a,_,d,e,f)}function md5_ii(a,_,b,c,d,e,f){return md5_cmn(b^(_| ~c),a,_,d,e,f)}function safe_add(a,_){var b=(65535&a)+(65535&_);return(a>>16)+(_>>16)+(b>>16)<<16|65535&b}function bit_rol(a,_){return a<<_|a>>>32-_}var result=md5("Lorem Ipsum is simply dummy text of the printing"),result=md5('\u041F\u0440\u0430\u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u043C \u0442\u0435\u043A\u0441\u0442\u0430-\u0440\u044B\u0431\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 "Lorem Ipsum"')
