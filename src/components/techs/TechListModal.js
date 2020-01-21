import React, { useEffect } from 'react';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';

const TechListModal = ({ technician: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechFromServer();
    // eslint-disable-next-line
  }, []);

  const getTechFromServer = () => {
    getTechs();
  };
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.protoType = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  technician: state.technician,
  getTechs: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
