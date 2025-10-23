import React from 'react'

const Contacts = () => {
    return (
        <div className="block">
            <h3>CONTACTS</h3>
            <div className="content">
                <div className="contact">
                    <h4>Email:</h4>
                    <a href='mailto:zhigarevichnadya@gmail.com'>zhigarevichnadya@gmail.com</a>
                </div>
                <div className="contact">
                    <h4>Phone:</h4>
                    <p>+375298937258</p>
                </div>
                <div className="contact">
                    <h4>Telegram:</h4>
                    <a href='https://t.me/nadezhi'>
                        @nadezhi
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts