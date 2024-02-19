import React from 'react';
import PropTypes from 'prop-types';
import { CreditCardWrapper } from './Credit-Card.styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import VentureX from '../../img/cap-one-venture-x.png'
import FreedomFlex from '../../img/chase_freedom_flex.png'
import FreedomUnlim from '../../img/chase_freedom_unlimited.png'
import SapphirePref from '../../img/chase_sapphire_preferred.png'
import UnitedExplorer from '../../img/chase_united_explorer_card.png'
import Bilt from '../../img/WF_Bilt.png'
import SapphireRes from '../../img/chase_sapphire_reserve.png'

import Fab from '@mui/material/Fab';

const CreditCard = () => (
   //    function MyComponent(CardName, Image, Description) {
   //       return(
   //          <CreditCardWrapper>
   //             <Card sx={{ maxWidth: 345 }}>
   //                <CardActionArea>
   //                <CardMedia
   //                   component="img"
   //                   image={Image}
   //                   alt="Venture-X"
   //                />
   //                <CardContent>
   //                   <Typography gutterBottom variant="h5" component="div">
   //                   {CardName}
   //                   </Typography>
   //                   <Typography variant="body2" color="text.secondary">
   //                      2X Everyday Purchases
   //                      5X Cap One Flights
   //                      10X Cap One Hotels
   //                      {Description}
   //                   </Typography>
   //                </CardContent>
   //                <Fab variant="extended" size="small" color="primary">
   //                   Extended
   //                   </Fab>
   //                </CardActionArea>
   //             </Card>
   //          </CreditCardWrapper>
   //       )
   //   }
   
 



   <CreditCardWrapper>
      {/* Venture X https://i.capitalone.com/JuDOb7CvF */}
      <div class="card">
         <img class="card-img-top" src={VentureX} alt="Card image cap"></img>
         <div class="card-body">
            <h5 class="card-title">Venture X</h5>
            <p class="card-text">
               <li>
                  2X Everyday Purchases
               </li>
               <li>
                  5X Cap One Flights
               </li>
               <li>
                  10X Cap One Hotels
               </li>
                  </p>
            <a href="https://i.capitalone.com/JuDOb7CvF" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>

      {/* Chase Saphire Preferred https://www.referyourchasecard.com/19l/IOD7GJYRQS */}
      <div class="card">
         <img class="card-img-top" src={SapphirePref} alt="Card image cap"></img>
         <div class="card-body">
            <h5 class="card-title">Sapphire Preferred</h5>
            <p class="card-text">
               <li>
                  2X Everyday Purchases
               </li>
               <li>
                  5X Cap One Flights
               </li>
               <li>
                  10X Cap One Hotels
               </li>
                  </p>
            <a href="https://www.referyourchasecard.com/19l/IOD7GJYRQS" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>

      {/* Bilt MasterCard https://www.biltrewards.com/card/referral/0O6Y-OWW8 */}
      <div class="card">
         <img class="card-img-top" src={Bilt} alt="Card image cap"></img>
         <div class="card-body">
            <h5 class="card-title">Bilt MasterCard</h5>
            <p class="card-text">
               <li>
                  2X Everyday Purchases
               </li>
               <li>
                  5X Cap One Flights
               </li>
               <li>
                  10X Cap One Hotels
               </li>
                  </p>
            <a href="https://www.biltrewards.com/card/referral/0O6Y-OWW8" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>

      {/* Chase United Card https://www.referyourchasecard.com/215u/BBBWMYJY0W */}
      <div class="card">
         <img class="card-img-top" src={UnitedExplorer} alt="Card image cap"></img>
         <div class="card-body">
            <h5 class="card-title">United Explorer</h5>
            <p class="card-text">
               <li>
                  2X Everyday Purchases
               </li>
               <li>
                  5X Cap One Flights
               </li>
               <li>
                  10X Cap One Hotels
               </li>
                  </p>
            <a href="https://www.referyourchasecard.com/215u/BBBWMYJY0W" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>

      {/* Chase Freedom Flex https://www.referyourchasecard.com/18o/EY4VYPMTD1 */}
      <div class="card">
         <img class="card-img-top" src={FreedomFlex} alt="Card image cap"></img>
         <div class="card-body">
            <h5 class="card-title">Freedom Flex</h5>
            <p class="card-text">
               <li>
                  2X Everyday Purchases
               </li>
               <li>
                  5X Cap One Flights
               </li>
               <li>
                  10X Cap One Hotels
               </li>
                  </p>
            <a href="https://www.referyourchasecard.com/18o/EY4VYPMTD1" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>

      {/* Chase Freedom Unlimited https://www.referyourchasecard.com/18o/EY4VYPMTD1 */}
      <div class="card">
         <img class="card-img-top" src={FreedomUnlim} alt="Card image cap"></img>
         <div class="card-body">
            <h5 class="card-title">Freedom Unlimited</h5>
            <p class="card-text">
               <li>
                  2X Everyday Purchases
               </li>
               <li>
                  5X Cap One Flights
               </li>
               <li>
                  10X Cap One Hotels
               </li>
                  </p>
            <a href="https://www.referyourchasecard.com/18o/EY4VYPMTD1" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>

      <div class="card">
         <img class="card-img-top" src={SapphireRes} alt="Card image cap"></img>
         <div class="card-body">
            <h5 class="card-title">Sapphire Reserve</h5>
            <p class="card-text">
               <li>
                  2X Everyday Purchases
               </li>
               <li>
                  5X Cap One Flights
               </li>
               <li>
                  10X Cap One Hotels
               </li>
                  </p>
            <a href="https://www.referyourchasecard.com/19l/IOD7GJYRQS" class="btn btn-primary">Go somewhere</a>
         </div>
      </div>





      <Card sx={{ maxWidth: 345 }}>
         <CardActionArea>
            <CardMedia
               component="img"
               image={VentureX}
               alt="Venture-X"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  Venture-X
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  2X Everyday Purchases
                  5X Cap One Flights
                  10X Cap One Hotels
               </Typography>
            </CardContent>
            <Fab variant="extended" size="small" color="primary">
               Extended
            </Fab>
         </CardActionArea>
      </Card>
   </CreditCardWrapper>
);

CreditCard.propTypes = {};

CreditCard.defaultProps = {};

export default CreditCard;
