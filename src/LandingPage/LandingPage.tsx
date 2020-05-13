import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';

import { Button } from '../Components';
import { DeviceMeasures } from '../utils';
import { Header, Input, PasswordInput } from '../Components';

import styles from './LandingPage.module.scss';

const LandingPage: React.FC = () => {
  const isMobile: boolean = useMedia(DeviceMeasures.MOBILE);
  const [hasAccount, setHasAccount] = useState<boolean>(false);

  const joinNow = (): void => setHasAccount(false);
  const signIn = (): void => setHasAccount(true);

  return (
    <>
      <Row className={styles.header}>
        <Header title="IdeaHub" joinNow={joinNow} signIn={signIn} />
      </Row>
      <Row className={styles.landingPage}>
        <Row type="flex" className={styles.contentSection}>
          <Col lg={12} md={12} sm={24}>
            <Row className={styles.information}>
              <Col className={styles.title}>POOL RESOURCES</Col>
              <Col className={styles.text}>Pool human and monetary resources at your comfort</Col>
            </Row>
          </Col>
          <Col span={isMobile ? 24 : 12}>
            <Row className={isMobile ? '' : styles.form}>
              {!hasAccount && (
                <Col style={{ marginBottom: 16 }}>
                  <Input placeholder="Username" />
                </Col>
              )}
              <Col style={{ marginBottom: 16 }}>
                <Input placeholder="Email" />
              </Col>
              {!hasAccount && (
                <Col style={{ marginBottom: 16 }}>
                  <PasswordInput placeholder="Password" />
                </Col>
              )}
              <Col style={{ marginBottom: 40 }}>
                <PasswordInput placeholder="Confirm password" />
              </Col>
              <Col>
                <Link to="/ideahub">
                  <Button style={{ width: '100%' }} type="primary" size="large">
                    {hasAccount ? 'Sign In' : 'Join now'}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default LandingPage;
