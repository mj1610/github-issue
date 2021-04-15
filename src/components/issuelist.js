const IssueList = ({ data }) => {
    const timeAgo = (d) => {
      let dm = new Date(d);
      d = dm.getTime();
      const diff = (new Date() - d) / 1000;
      console.log(diff);
      if (diff < 60) {
        const v = Math.round(diff);
        return v + " second" + (v === 1 ? "" : "s") + " ago";
      } else if (diff < 60 * 60) {
        const v = Math.round(diff / 60);
        return v + " minute" + (v === 1 ? "" : "s") + " ago";
      } else if (diff < 60 * 60 * 24) {
        const v = Math.round(diff / (60 * 60));
        return v + " hour" + (v === 1 ? "" : "s") + " ago";
      } else if (diff < 60 * 60 * 24 * 30.436875) {
        const v = Math.round(diff / (60 * 60 * 24));
        return v + " day" + (v === 1 ? "" : "s") + " ago";
      } else if (diff < 60 * 60 * 24 * 30.436875 * 12) {
        const v = Math.round(diff / (60 * 60 * 24 * 30.436875));
        return v + " month" + (v === 1 ? "" : "s") + " ago";
      }
      const v = Math.round(diff / (60 * 60 * 24 * 30.436875 * 12));
      return v + " year" + (v === 1 ? "" : "s") + " ago";
    };
    return (
      <div className="container">
        <ol className="list-group list-group-numbered mt-2">
          {data.map((d, index) => {
            return (
              <div
                className="list-group-item d-flex justify-content-between align-items-start"
                key={d.id}
              >
                <div className="ms-2 me-auto text-start">
                  <div className="fw-bold ">
                    <a href={d.html_url}>{d.title}</a> |
                    {d.labels.map((l, index) => {
                      return (
                        <a href={l.url}>
                          {" "}
                          <span
                            className="badge rounded-pill"
                            style={{ backgroundColor: `#${l.color}` }}
                          >
                            {l.name}
                          </span>{" "}
                        </a>
                      );
                    })}
                  </div>
                  {`#${d.number} opened ${timeAgo(d.created_at)} by `}{" "}
                  <a href={d.html_url}> {`${d.user.login}`} </a>
                </div>
                {d.comments > 0 && (
                  <span className="badge bg-primary rounded-pill">
                    {d.comments} Comment{d.comments > 1 && `s`}
                  </span>
                )}
              </div>
            );
          })}
        </ol>
      </div>
    );
  };
  
  export default IssueList;
  