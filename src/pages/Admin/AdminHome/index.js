import classNames from 'classnames/bind';
import styles from './AdminHome.module.scss';
import { ArrowDownOutlined, ArrowUpOutlined, LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic, Card, Radio, Tabs } from 'antd';

const cx = classNames.bind(styles);

function AdminHome() {
  const items = [];

  return (
    <div className={cx('wrapper')}>
      <Row
        justify="space-around"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col span={7} className={cx('revenue')}>
          <h4>Doanh thu</h4>
          <Card
            bordered={false}
            style={{
              marginTop: '28px',
            }}
          >
            <Statistic
              title="Tăng"
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={7} className={cx('best-seller')}>
          <h4>Sản phẩm</h4>

          <Statistic
            style={{
              marginTop: '8px',
            }}
            title="Tổng sản phẩm đã được bán"
            value={112893}
          />
          <Statistic
            style={{
              marginTop: '8px',
            }}
            title="Sản phẩm còn lại"
            value={112893}
          />
          <Statistic
            style={{
              marginTop: '8px',
            }}
            title="Giá trị đơn hàng cao nhất (VND)"
            value={112893}
          />
        </Col>
        <Col span={7} className={cx('total-customer')}>
          <h4>Khách hàng</h4>
          <Statistic
            style={{
              marginTop: '8px',
            }}
            title="Hài lòng"
            value={1128}
            prefix={<LikeOutlined />}
          />
          <Statistic
            style={{
              marginTop: '8px',
            }}
            title="Không hài lòng"
            value={1128}
            prefix={<LikeOutlined />}
          />
          <Statistic
            style={{
              marginTop: '8px',
            }}
            title="Khách hàng của tháng"
            value={'Nguyễn Văn A'}
            prefix={<LikeOutlined />}
          />
        </Col>
      </Row>
      <Row className={cx('chart')} gutter={12}>
        <h2>Biểu đồ</h2>
      </Row>
      <Row>
        <Tabs
          defaultActiveKey="1"
          type="card"
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Card Tab ${id}`,
              key: id,
              children: <h2>{id}</h2>,
            };
          })}
        />
      </Row>
    </div>
  );
}

export default AdminHome;
