import { connect } from "react-redux";
import KanyeQuoteView from "../components/KanyeQuoteView";
import addToFavourites  from "../actions";

const mapStateToProps = state => ({
    favouriteQuotes: state.favouriteQuotes
})

const mapDispatchToProps = dispatch => ({
    addToFavs: name => dispatch(addToFavourites(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KanyeQuoteView)