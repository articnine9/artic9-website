import React from 'react';
import Akshaya from '../../Assets/clients-logo/akshaya.jpg'
import AnandaBhavan from '../../Assets/clients-logo/Ananda-bhavan.png';
import Arunachala from '../../Assets/clients-logo/Arunachala-logo.png';
import AT from '../../Assets/clients-logo/at.png';
import Ayutha from '../../Assets/clients-logo/Ayutha.png';
import BrandPartners from '../../Assets/clients-logo/Brand-partners.png';
import ClearEye from '../../Assets/clients-logo/Clear-eye.png';
import ColdAir from '../../Assets/clients-logo/Cold-air.png';
import DCS from '../../Assets/clients-logo/dcs.jpg';
import Deertech from '../../Assets/clients-logo/deertech.jpg';
import Delano from '../../Assets/clients-logo/Delano.png';
import DigiMart from '../../Assets/clients-logo/Digi-Mart.png';
import FirstLoan from '../../Assets/clients-logo/first-loan.jpg';
import GT from '../../Assets/clients-logo/GT.png';
import Hairways from '../../Assets/clients-logo/Hairways.png';
import HarrisNadar from '../../Assets/clients-logo/Harris-nadar.png';
import Karpagam from '../../Assets/clients-logo/karpagam.jpg';
import MarthaGapharma from '../../Assets/clients-logo/marthagapharma.jpg';
import PipesNTiles from '../../Assets/clients-logo/pipes-n-tiles-logo.png';
import Platez from '../../Assets/clients-logo/Platez.png';
import Pragurp from '../../Assets/clients-logo/Pragurp.jpg';
import RajanCo from '../../Assets/clients-logo/Rajan-co.png';
import Sident from '../../Assets/clients-logo/Sident.png';
import Snowch from '../../Assets/clients-logo/snowch-logo.png';
import Spring from '../../Assets/clients-logo/spring-logo.png';
import TG from '../../Assets/clients-logo/tg-logo.png';
import TGImage from '../../Assets/clients-logo/tg.jpg';
import Thasor from '../../Assets/clients-logo/thasor-logo.png';
import Titan from '../../Assets/clients-logo/Titan.jpg';
import TitanEyePlus from '../../Assets/clients-logo/titaneyeplus.jpg';
import ToniAndGuy from '../../Assets/clients-logo/toni-and-guy.jpg';
import Votto from '../../Assets/clients-logo/votto.jpg';
import YMCA from '../../Assets/clients-logo/ymca.jpg';

const Client = () => {
    const clients = [
        { src: HarrisNadar, width: 150, alt: 'Harris Nadar' },
        { src: AT, width: 170, alt: 'AT' },
        { src: GT, width: 150, alt: 'GT' },
        { src: Titan, width: 150, alt: 'Titan' },
        { src: TG, width: 200, alt: 'TG' },
        { src: Snowch, width: 200, alt: 'Snowch' },
        { src: Arunachala, width: 150, alt: 'Arunachala' },
        { src: Pragurp, width: 200, alt: 'Pragurp' },
        { src: ColdAir, width: 130, alt: 'Cold Air' },
        { src: Delano, width: 170, alt: 'Delano' },
        { src: DigiMart, width: 150, alt: 'Digi Mart' },
        { src: Ayutha, width: 130, alt: 'Ayutha' },
        { src: Hairways, width: 130, alt: 'Hairways' },
        { src: BrandPartners, width: 130, alt: 'Brand Partners' },
        { src: Platez, width: 150, alt: 'Platez' },
        { src: RajanCo, width: 150, alt: 'Rajan Co' },
        { src: Sident, width: 150, alt: 'Sident' },
        { src: ClearEye, width: 130, alt: 'Clear Eye' },
        { src: Thasor, width: 130, alt: 'Thasor' },
        { src: AnandaBhavan, width: 150, alt: 'Ananda Bhavan' },
        { src: TGImage, width: 150, alt: 'TG' },
        { src: DCS, width: 200, alt: 'DCS' },
        { src: Akshaya, width: 180, alt: 'Akshaya' },
        { src: Karpagam, width: 200, alt: 'Karpagam' },
        { src: MarthaGapharma, width: 200, alt: 'Martha Gapharma' },
        { src: TitanEyePlus, width: 200, alt: 'Titan Eye Plus' },
        { src: YMCA, width: 200, alt: 'YMCA' },
        { src: Votto, width: 200, alt: 'Votto' },
        { src: Spring, width: 200, alt: 'Spring' },
        { src: FirstLoan, width: 200, alt: 'First Loan' },
      ];
  return (
    <section id="team-page-area" className="team-page-section my-5">
      <div className="section-title text-center headline">
        <div className="td-faq-body td-faq-body-sub-content mt-5">
          We are a <b style={{ fontWeight: 600 }}>Growth Partner</b> to <br /> 100+ Leading Brands
        </div>
      </div>
      <div className="container mt-5 client-sec">
        <div className="team-content-wrapper">
          <div className="row">
            {clients.map((client, index) => (
              <div className="col-lg-2 col-md-6" key={index} >
                <div className="team-img-text-wrapper text-center">
                  <div className="team-member-img position-relative m-3">
                    <img src={client.src} width={client.width} alt={client.alt} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
