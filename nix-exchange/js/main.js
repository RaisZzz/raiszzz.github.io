document.addEventListener('DOMContentLoaded', function() {
    const
        $exchangeForm = document.getElementById('exchange-form'),
        $exchangePopup = document.getElementById('exchange-popup'),
        $exchangePopupForm = document.getElementById('exchange-popup-form'),
        $transactionPopup = document.getElementById('transaction-popup'),
        $transactionForm = document.getElementById('transaction-form'),
        $contactsForm = document.getElementById('contacts-form'),
        $contactsPopup = document.getElementById('contacts-popup'),
        $menu = document.getElementById('menu'),
        $menuBtn = document.getElementById('menu-btn')

    if ($exchangeForm) {
        $exchangeForm.addEventListener('submit', function(e) {
            e.preventDefault()

            if ($exchangePopup) {
                $exchangePopup.classList.add('active')
            }
        })
    }

    if ($exchangePopupForm) {
        $exchangePopupForm.addEventListener('submit', function(e) {
            e.preventDefault()
            $exchangePopup.classList.remove('active')

            if ($transactionPopup) {
                $transactionPopup.classList.add('active')
            }
        })
    }

    if ($transactionForm) {
        $transactionForm.addEventListener('submit', function(e) {
            e.preventDefault()

            if ($transactionPopup) {
                $transactionPopup.classList.remove('active')
            }
        })
    }

    if ($contactsForm) {
        $contactsForm.addEventListener('submit', function(e) {
            e.preventDefault()

            if ($contactsPopup) {
                $contactsPopup.classList.add('active')
            }
        })
    }

    if ($menuBtn && $menu) {
        $menuBtn.addEventListener('click', function() {
            $menu.classList.toggle('active')
            $menuBtn.classList.toggle('active')
            document.body.classList.toggle('no-scroll')
        })
    }
})
