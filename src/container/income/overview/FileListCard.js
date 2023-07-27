import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Cards } from '../../../components/cards/frame/cards-frame';

function FileListCard({ title }) {
  return (
    <Cards title={title}>
      <div className="file-list">
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/zip.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Contract.zip</span>
              <span className="file-size">7.05 MB</span>
              <span className="file-content-action">
                <Link to="/">Download</Link>
              </span>
            </div>
          </div>
        </div>
        {/* End of .file-list__single */}
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/jpg.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Document 1.jpg</span>
              <span className="file-size">522 KB</span>
              <span className="file-content-action">
                <Link to="#">View</Link>
                <Link to="#">Download</Link>
              </span>
            </div>
          </div>
        </div>
        {/* End of .file-list__single */}
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/jpg.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Document 2.jpg</span>
              <span className="file-size">2.05 Kb</span>
              <span className="file-content-action">
                <Link to="#">View</Link>
                <Link to="#">Download</Link>
              </span>
            </div>
          </div>
        </div>
        {/* End of .file-list__single */}
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/jpg.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Document 3.jpg</span>
              <span className="file-size">522 KB</span>
              <span className="file-content-action">
                <Link to="#">View</Link>
                <Link to="#">Download</Link>
              </span>
            </div>
          </div>
        </div>
        {/* End of .file-list__single */}
        <div className="file-list__single d-flex">
          <div className="file-single-info d-flex">
            <div className="file-single-logo">
              <img src={require(`../../../static/img/files/jpg.png`)} alt="File Logo" />
            </div>
            <div className="file-single__content">
              <span className="file-name">Document 4.jpg</span>
              <span className="file-size">522 KB</span>
              <span className="file-content-action">
                <Link to="#">View</Link>
                <Link to="#">Download</Link>
              </span>
            </div>
          </div>
        </div>
        {/* End of .file-list__single */}
      </div>
    </Cards>
  );
}

FileListCard.defaultProps = {
  title: 'File',
};

FileListCard.propTypes = {
  title: PropTypes.string,
};

export default FileListCard;
