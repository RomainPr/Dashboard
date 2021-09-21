import { connect } from 'react-redux';

import MainCard from 'src/components/MainCard';

const mapStateToProps = (state) => ({
  data: state.dashboard.data,
});

export default connect(mapStateToProps)(MainCard);
