import PropTypes from 'prop-types';
import { Statistic, TextList, TextItem, Title } from './Statistics.styled';
import { Text } from 'components/Profile/Profele.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}
      <TextList>
        {stats.map(({ id, label, percentage }) => (
          <Text key={id}>
            <TextItem>{label}</TextItem>
            <TextItem>{percentage}%</TextItem>
          </Text>
        ))}
      </TextList>
    </Statistic>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
