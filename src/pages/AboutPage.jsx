import { Card } from '../components/shared';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About This project</h1>
        <p>This is a react app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to='/'>Home Page</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
