import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IssueList from "../components/issuelist";
import Pagination from "./pagination";

const Issues = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  let page = 1;
  if (params.page != null) page = params.page;
  const API_URL = `https://api.github.com/repos/facebook/create-react-app/issues?state=open&per_page=10&page=${page}`;
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        return res;
      })
      .then(console.log(data));
  }, []);
  return (
    <>
      {data && <IssueList data={data} />}
      <Pagination />
    </>
  );
};

export default Issues;
