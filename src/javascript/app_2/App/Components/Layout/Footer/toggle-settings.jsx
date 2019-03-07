import classNames        from 'classnames';
import PropTypes         from 'prop-types';
import React             from 'react';
import { CSSTransition } from 'react-transition-group';
import { Icon }          from 'Assets/Common';
import { IconSettings }  from 'Assets/Footer';
import SettingsDialog    from '../../Elements/SettingsDialog/settings-dialog.jsx';

const ToggleSettings = ({
    is_language_visible,
    is_settings_visible,
    toggleSettings,
}) => {
    const toggle_settings_class = classNames('ic-settings', 'footer__link', {
        'ic-settings--active': is_settings_visible,
    });
    return (
        <React.Fragment>
            <a
                href='javascript:;'
                onClick={toggleSettings}
                className={toggle_settings_class}
            >
                <Icon icon={IconSettings} className='footer__icon ic-settings__icon' />
            </a>
            <CSSTransition
                in={is_settings_visible}
                timeout={100}
                classNames={{
                    enter    : 'settings-dialog--enter',
                    enterDone: 'settings-dialog--enter-done',
                    exit     : 'settings-dialog--exit',
                }}
                unmountOnExit
            >
                <SettingsDialog
                    is_open={is_settings_visible}
                    is_language_dialog_visible={is_language_visible}
                    toggleDialog={toggleSettings}
                />
            </CSSTransition>
        </React.Fragment>
    );
};

ToggleSettings.propTypes = {
    is_language_visible: PropTypes.bool,
    is_settings_visible: PropTypes.bool,
    toggleSettings     : PropTypes.func,
};

export { ToggleSettings };
