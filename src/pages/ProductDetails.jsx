import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getCource, getToken } from '../API/api';
import { BackLink } from '../components/BackLink';
import { nanoid } from 'nanoid';
import ReactPlayer from 'react-player';

const ProductDetails = () => {
  const { id } = useParams();
  getToken();
  const [course, setCourse] = useState([]);
  const [videoLink, setvideoLink] = useState('');
  useEffect(() => {
    getCource(id).then(res => {
      if (res) {
        setCourse(res);
      }
    });
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  const { lessons } = course;

  const btnClick = e => {
    setvideoLink(e.currentTarget.value);
  };

  return (
    <main>
      {course.length === 0 && <p>Loading</p>}
      <div>
        {course && <BackLink to={backLinkHref}>Back to courses</BackLink>}
        {course.length > 0 && (
          <img
            src="https://static.wixstatic.com/media/676f5c_0ed5b9bc7c4f45bc915590d42969c2d6~mv2.gif"
            alt=""
          />
        )}
        {course.description && <div>{course.description}</div>}
        {course.previewImageLink && (
          <img
            src={`${course.previewImageLink}/cover.webp`}
            alt="el.description"
          />
        )}
<h3>Click on your course</h3>
        {lessons && (
          <ul>
            {lessons.map(el => (
              <li key={nanoid()} style={{ listStyle: 'none' }}>
                <button value={el.link} type="button" onClick={btnClick} style={{ marginBottom: '10px' }}>
                  {el.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {videoLink !== 0 && (
          <ReactPlayer
            url={videoLink}
            playing={true}
            loop={true}
            config={{
              file: {
                attributes: {
                  crossOrigin: 'true',
                  preload: 'auto',
                },
              },
            }}
            controls
          />
        )}
      </div>
    </main>
  );
};

export default ProductDetails;
