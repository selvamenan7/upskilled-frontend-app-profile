import React from 'react';
import { Card, Chip, Hyperlink } from '@edx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import cardImageCapFallbackSrc from '../../images/card-imagecap-fallback.png';

const RecommendationCard = ({ rec }) => {
  const {
    card_image_url: cardImageUrl,
    marketing_url: marketingUrl,
    owners,
    partner,
    title,
  } = rec;

  const { logoImageUrl } = owners[0];

  return (
    <Hyperlink destination={marketingUrl} target="_blank" showLaunchIcon={false}>
      <Card className={classNames('carousel-card')}>
        <Card.ImageCap
          src={cardImageUrl}
          logoSrc={logoImageUrl}
          fallackSrc={cardImageCapFallbackSrc}
          fallBackLogo={cardImageCapFallbackSrc}
        />
        <Card.Header title={title} />
        <Card.Section>
          {partner.map((orgName, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Chip key={index}>
              {orgName}
            </Chip>
          ))}
        </Card.Section>
      </Card>
    </Hyperlink>
  );
};

RecommendationCard.propTypes = {
  rec: PropTypes.shape({
    title: PropTypes.string,
    card_image_url: PropTypes.string,
    marketing_url: PropTypes.string,
    partner: PropTypes.arrayOf(PropTypes.string),
    owners: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      logoImageUrl: PropTypes.string,
    })),
  }).isRequired,
};

export default RecommendationCard;
