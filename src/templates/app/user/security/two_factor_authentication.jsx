import React from 'react';
import Loading from '../../../_common/components/loading.jsx';

const ErrorMessage = ({id}) => (
    <React.Fragment>
        <p className='invisible notice-msg center-text' id={id}>Error Message here</p>
    </React.Fragment>
);

const OtpForm = () => (
    <React.Fragment>
        <form id='frm_two_factor_auth' className='invisible'>
            <div className='otp-form-group'>
                <div>
                    <input type='text' id='otp' placeholder={it.L('6-digit code')} />
                </div>
                <button type='submit' id='btn_submit' />
            </div>
            <p id='form_message'/>
        </form>
    </React.Fragment>
);

const TwoFactorStatus = ({type}) => (
    <div className='two-fa-status'>
        <div className='two-fa-status-container'>
            <img className='responsive two-fa-status-icon' src={it.url_for(`images/pages/settings/2fa-${type}.svg`)} />
            <p className='two-fa-status-text'>{it.L(`Two-factor authentication is currently ${type}.`)}</p>
        </div>
    </div>
);

const TwoFactorAuthentication = () => (
    <React.Fragment>
        <h1>{it.L('Two-Factor Authentication')}</h1>
        <p>{it.L('Protect your account with two-factor authentication. Each time you sign into your account, you will need to enter your password, plus an authentication code generated by an app on your smartphone.')}</p>

        <div id='two_factor_loading'><Loading /></div>
        <ErrorMessage id='status_error' />

        <div id='disabled' className='invisible'>
            <TwoFactorStatus type='disabled' />

            <h2>{it.L('How to setup two-factor authentication for your [_1] account:', it.website_name)}</h2>

            <div className='steps steps-vertical'>
                <div className='step'>
                    <div className='circle'>1</div>
                    <div className='content'>
                        <p>{it.L('Scan the QR code below with your authentication app (such as [_1], [_2], and [_3])', '<strong>Google Authenticator</strong>', '<strong>Authy</strong>', '<strong>Duo Mobile</strong>')}</p>
                        <div id='qrcode_loading'><Loading /></div>
                        <ErrorMessage id='generate_error' />
                        <div id='qrcode' />
                    </div>
                </div>
                <div className='step'>
                    <div className='circle'>2</div>
                    <div className='content'>
                        <p>{it.L('Enter the authentication code generated by the app below:')}</p>
                    </div>
                </div>
            </div>
        </div>

        <div id='enabled' className='invisible'>
            <TwoFactorStatus type='enabled' />
            <p>{it.L('To disable two-factor authentication, please enter the code generated by the app below: ')}</p>
        </div>

        <OtpForm />
    </React.Fragment>
);

export default TwoFactorAuthentication;
