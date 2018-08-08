import { observer } from 'mobx-react';
import PropTypes    from 'prop-types';
import React        from 'react';
import InfoGroup    from '../Components/info_group.jsx';
import { localize } from '../../../../_common/localize';

const DetailsContents = ({
    buy_id,
    details_expiry,
    details_info,
    longcode,
}) => (
    <div className='contract-contents'>
        <div className='longcode'>{longcode}</div>
        <div className='ref-number'>{localize('Reference No.:')} {buy_id}</div>
        <InfoGroup
            title={localize('Contract Information')}
            items={details_info}
        />
        <InfoGroup
            title={localize('Contract Expiry')}
            items={details_expiry}
        />
    </div>
);

DetailsContents.propTypes = {
    buy_id        : PropTypes.string,
    details_expiry: PropTypes.object,
    details_info  : PropTypes.object,
    longcode      : PropTypes.string,
};

export default observer(DetailsContents);
