import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import NavigationBar from '../Navigation'
import Fotter from '../Fotter'

import History from './History';
import Auth from './CheckAuth';

import Admin from '../Admin'
import { AHome } from '../AComponents'
import { Home, Jewellery, Gemstones, Engagement, Engraving, Gift, About, Luckygems, Contact, Store, Notfound, MensRings, WomensRings, MensBracelet, WomensBracelet, PearlJewelry, NecklacesPendants, PreciousGemstiones, SemiPreciousGemstones, MensEngagementRings, WomensEngagementRings, EngagmentGiftsForHim, EngagmentGiftsForHer, aboutEngravingArt, ArtGallery, GiftForHim, GiftForHer, WeddingGifts } from '../Components';




injectTapEventPlugin();

function mapStateToProps(state) {
    return {
        isLogin: state.AuthReducer.LoginSuccess,
    }
}

class Routers extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router history={History} >
                    <div style={{ width: "100%", overflowX: "hidden" }} >
                        <NavigationBar />
                        <Switch>
                            {/* ADMIN*/}
                            <Route path="/admin" component={Admin} />
                            <Route path="/auth" component={Auth(Home)} />

                            {/* ADMIN*/}
                            {/* ROUTES*/}
                            {/* HOME*/}
                            {/* {this.props.isLogin ? */}
                                {/* <Route exact path="/" component={AHome} /> */}
                                {/* : */}
                                <Route exact path="/" component={Home} />
                            {/* } */}
                            {/* HOME*/}
                            {/* JWELRY */}
                            <Route path="/jewelry/mens_rings" component={MensRings} />
                            <Route path="/jewelry/womens_rings" component={WomensRings} />
                            <Route path="/jewelry/mens_bracelet" component={MensBracelet} />
                            <Route path="/jewelry/womens_bracelet" component={WomensBracelet} />
                            <Route path="/jewelry/pearl_jewelry" component={PearlJewelry} />
                            <Route path="/jewelry/necklaces_pandant" component={NecklacesPendants} />
                            {/* JWELRY */}
                            {/*  GEMSTONES */}
                            <Route path="/gemstones/preciousgems" component={PreciousGemstiones} />
                            <Route path="/gemstones/semipreciousgems" component={SemiPreciousGemstones} />
                            {/*  GEMSTONES */}
                            {/*  ENGAGEMENT */}
                            <Route path="/engagement/mens_engagement_rings" component={MensEngagementRings} />
                            <Route path="/engagement/womens_engagement_rings" component={WomensEngagementRings} />
                            <Route path="/engagement/engagement_gifts_for_him" component={EngagmentGiftsForHim} />
                            <Route path="/engagement/engagement_gifts_for_her" component={EngagmentGiftsForHer} />
                            {/*   ENGRAVING ART */}
                            <Route path="/engraving/about_engraving_art" component={aboutEngravingArt} />
                            <Route path="/engraving/art_gallery" component={ArtGallery} />
                            {/*   ENGRAVING ART */}
                            {/*   GIFTS */}
                            <Route path="/gift/gift_for_him" component={GiftForHim} />
                            <Route path="/gift/gift_for_her" component={GiftForHer} />
                            <Route path="/gift/wedding_gifts" component={WeddingGifts} />
                            {/*   GIFTS */}
                            {/*   ABOUT US */}
                            <Route path="/about" component={About} />
                            {/*   ABOUT US */}
                            {/*   FIND YOUR LUCKY GEMSTONES */}
                            <Route path="/luckygems" component={Luckygems} />
                            {/*   FIND YOUR LUCKY GEMSTONES */}
                            {/*   CONTACT */}
                            <Route path="/contact" component={Contact} />
                            {/*   CONTACT */}
                            {/*   STORE */}
                            <Route path="/store" component={Store} />
                            {/*   STORE */}
                            <Route path="/jewelry" component={Jewellery} />
                            <Route path="/gemstones" component={Gemstones} />
                            <Route path="/engagement" component={Engagement} />
                            <Route path="/engraving" component={Engraving} />
                            <Route path="/gift" component={Gift} />
                            {/* Routes */}
                            <Route path="*" component={Auth(Notfound)} />
                        </Switch>
                        <Fotter />
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

export default connect(mapStateToProps, null)(Routers);