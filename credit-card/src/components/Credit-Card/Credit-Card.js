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
import './Credit-Card.css'


const CreditCard = () => (
   <CreditCardWrapper>

      {/* Venture X https://i.capitalone.com/JuDOb7CvF */}
      <div className="card w-50 card text-white bg-dark mb-3">
         <img className="card-img-top" src={VentureX} alt="Card image cap"></img>
         <div className="card-body">
            <h5 className="card-title">Venture X</h5>
            <p className="card-text">
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
            <a href="https://i.capitalone.com/JuDOb7CvF" className="btn btn-primary">Apply Now</a>
         </div>
      </div>

      {/* Bilt MasterCard https://www.biltrewards.com/card/referral/0O6Y-OWW8 */}
      <div className="card w-50 card text-white bg-dark mb-3">
         <img className="card-img-top" src={Bilt} alt="Card image cap"></img>
         <div className="card-body">
            <h5 className="card-title">Bilt MasterCard</h5>
            <p className="card-text">
               <li>
                  1X Rent
               </li>
               <li>
                  1st of month 6X Dining, 4X Travel, 2X Other
               </li>
               <li>
                  Rest of Month 3X Dining, 2X Travel, 1X Other
               </li>
            </p>
            <a href="https://www.biltrewards.com/card/referral/0O6Y-OWW8" className="btn btn-primary">Apply Now</a>
         </div>
      </div>

       {/* Chase Saphire Preferred https://www.referyourchasecard.com/19l/IOD7GJYRQS */}
       <div className="card w-50 card text-white bg-dark mb-3">
         <img className="card-img-top" src={SapphirePref} alt="Card image cap"></img>
         <div className="card-body">
            <h5 className="card-title">Sapphire Preferred</h5>
            <p className="card-text">
               <li>
                  3X Dining
               </li>
               <li>
                  2X Travel
               </li>
               <li>
                  5X Chase Portal Hotel & Car Rental
               </li>
               <li>
                  $50 Hotel Credit Through Chase Portal
               </li>
               <li>
                  Points Worth 25% when redeemed for travel
               </li>
            </p>
            <a href="https://www.referyourchasecard.com/19l/IOD7GJYRQS" className="btn btn-primary">Apply Now</a>
         </div>
      </div>

       {/* Chase Freedom Flex https://www.referyourchasecard.com/18o/EY4VYPMTD1 */}
       <div className="card w-50 card text-white bg-dark mb-3">
         <img className="card-img-top" src={FreedomFlex} alt="Card image cap"></img>
         <div className="card-body">
            <h5 className="card-title">Freedom Flex</h5>
            <p className="card-text">
               <li>
                  5% Cash Back Rotating Quarterly Category
               </li>
               <li>
                  3% Dining & Drugstores
               </li>
               <li>
                  1% Other
               </li>
               <li>
                  5% Chase Ultimate Rewards Portal
               </li>
            </p>
            <a href="https://www.referyourchasecard.com/18M/HY95P5QT0I" className="btn btn-primary">Apply Now</a>
         </div>
      </div>

      {/* Chase Freedom Unlimited https://www.referyourchasecard.com/18o/EY4VYPMTD1 */}
      <div className="card w-50 card text-white bg-dark mb-3">
         <img className="card-img-top" src={FreedomUnlim} alt="Card image cap"></img>
         <div className="card-body">
            <h5 className="card-title">Freedom Unlimited</h5>
            <p className="card-text">
               <li>
                  3% Dining & Drugstores
               </li>
               <li>
                  1.5% All Other Purchases
               </li>
               <li>
                  5% Chase Ultimate Rewards Portal
               </li>
            </p>
            <a href="https://www.referyourchasecard.com/18M/HY95P5QT0I" className="btn btn-primary">Apply Now</a>
         </div>
      </div>

      <div className="card w-50 card text-white bg-dark mb-3">
         <img className="card-img-top" src={SapphireRes} alt="Card image cap"></img>
         <div className="card-body">
            <h5 className="card-title">Sapphire Reserve</h5>
            <p className="card-text">
               <li>
                  3X Dining & Travel
               </li>
               <li>
                  1X Other
               </li>
               <li>
                  Points Worth 50% when redeemed for travel
               </li>
               <li>
                  $300 Travel Credit
               </li>
            </p>
            <a href="https://www.referyourchasecard.com/19l/IOD7GJYRQS" className="btn btn-primary">Apply Now</a>
         </div>
      </div> 


      {/* Chase United Card https://www.referyourchasecard.com/215u/BBBWMYJY0W */}
      <div className="card w-50 card text-white bg-dark mb-3">
         <img className="card-img-top" src={UnitedExplorer} alt="Card image cap"></img>
         <div className="card-body">
            <h5 className="card-title">United Explorer</h5>
            <p className="card-text">
               <li>
                  2X United
               </li>
               <li>
                  2 United Club Passes / Year
               </li>
               <li>
                  Free Checked Bag for you and companion
               </li>
            </p>
            <a href="https://www.referyourchasecard.com/215u/BBBWMYJY0W" className="btn btn-primary">Apply Now</a>
         </div>
      </div>

     
   </CreditCardWrapper >
);

CreditCard.propTypes = {};

CreditCard.defaultProps = {};

export default CreditCard;
