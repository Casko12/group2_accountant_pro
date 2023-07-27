import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilCheck from '@iconscout/react-unicons/icons/uil-check';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilChartPie from '@iconscout/react-unicons/icons/uil-chart-pie';
import UilWebGridAlt from '@iconscout/react-unicons/icons/uil-web-grid-alt';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import { Link, useParams } from 'react-router-dom';
import { ProjectDetailsWrapper } from './style';
import FileListCard from './overview/FileListCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { filterSinglePage } from '../../redux/project/actionCreator';

function IncomeDetails() {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.data);
  const params = useParams();
  useEffect(() => {
    if (!dispatch) {
      dispatch(filterSinglePage(parseInt(params.id, 10)));
    }
  }, [params.id, dispatch]);

  const { title, content } = project[0];

  return (
    <ProjectDetailsWrapper>
      <PageHeader
        className="ninjadash-page-header-main"
        ghost
        title={
          <div key="1" className="project-header">
            <Heading as="h2">{title}</Heading>
            <Button type="primary" size="small">
              <UilPlus /> Accepted
            </Button>
            <Button className="btn-markComplete" outlined type="white" size="small">
              <UilCheck /> Denied
            </Button>
          </div>
        }
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={6} xl={8} xs={24}>
            <Cards headless>
              <div className="state-single">
                <div className="color-primary">
                  <Link to="#">
                    <UilListUl />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">TypeFinanceIn vào đây</Heading>
                  <p>Category</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-secondary">
                  <Link to="#">
                    <UilChartPie />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">20/02/2023 Date vào đây</Heading>
                  <p>Date</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-success">
                  <Link to="#">
                    <UilWebGridAlt />
                  </Link>
                </div>
                <div>
                  <Heading as="h5">$27,500 amount vào đây</Heading>
                  <p>Amount</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-warning">
                  <Link to="#">
                    <UilClock />
                  </Link>
                </div>
                <div>
                  <Heading as="h5"> Name vào đây</Heading>
                  <p>Title</p>
                </div>
              </div>
            </Cards>
          </Col>
          <Col xxl={12} xl={16} xs={24}>
            <div className="about-project-wrapper">
              <Cards title="Description">
                <div className="about-content">
                  <p>{content}</p>
                  <p>
                    Description vào đây Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                  </p>
                </div>
                <div className="about-project">
                  <div>
                    <span>Created by</span>
                    <p>Userid vào đây</p>
                  </div>
                  <div>
                    <span>Date Created</span>
                    <p className="color-primary">28 Dec 2019 ngày tạo vào đây</p>
                  </div>
                </div>
              </Cards>
            </div>
          </Col>

          <Col xxl={8} xs={24}>
            <FileListCard />
          </Col>
        </Row>
      </Main>
    </ProjectDetailsWrapper>
  );
}
export default IncomeDetails;
