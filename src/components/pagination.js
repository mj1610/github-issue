import "bootstrap";
import { useParams } from "react-router-dom";

const Pagination = () => {
  const params = useParams();
  let page = parseInt(params.page);
  if (params.page == null) page = parseInt(1);
  let prev = page - 1;
  let next = page + 1;
  return (
    <div className="container d-flex justify-content-center mt-3 w-100">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {prev > 0 && (
            <li class="page-item">
              <a class="page-link" href={`/github-issues/${prev}`}>
                Previous
              </a>
            </li>
          )}
          {page + 1 < 110 && (
            <li class="page-item">
              <a class="page-link" href={`/github-issues/${page + 1}`}>
                {page + 1}
              </a>
            </li>
          )}
          {page + 2 < 110 && (
            <li class="page-item">
              <a class="page-link" href={`/github-issues/${page + 2}`}>
                {page + 2}
              </a>
            </li>
          )}
          {page + 3 < 110 && (
            <li class="page-item">
              <a class="page-link" href={`/github-issues/${page + 3}`}>
                {page + 3}
              </a>
            </li>
          )}
          {next < 110 && (
            <li class="page-item">
              <a class="page-link" href={`/github-issues/${next}`}>
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
