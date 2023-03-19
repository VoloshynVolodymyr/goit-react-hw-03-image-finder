import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <main>
      <img src="https://static.wixstatic.com/media/676f5c_0ed5b9bc7c4f45bc915590d42969c2d6~mv2.gif" alt="logo.gif"></img>
      <h1>З нами навчаються</h1>
      <ol>
        <li>
          <Link to="students">Студенти</Link>
        </li>
        <li>
          <Link to="specialists">Спеціалісти-початківці</Link>
        </li>
        <li>
          <Link to="experts">Фахівці з досвідом та світчери</Link>
        </li>
        <li>
          <Link to="top-managers">Топменеджери та засновники стартапів</Link>
        </li>
      </ol>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default About;
