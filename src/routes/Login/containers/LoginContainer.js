import { connect } from 'react-redux';
const mapDispatchToProps = {
  ...require('../modules/login')
};

import Login from '../components/Login';

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
