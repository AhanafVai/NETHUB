// import { Badge } from "@material-ui/core";
// import React from "react";
// import { img_300, unavailable } from "../../Config/Config";
// import ContentModal from "../Content/ContentModal";
// import "./SingleContent.css";

// const SingleContent = ({
//   id,
//   poster,
//   title,
//   date,
//   media_type,
//   vote_average,
// }) => {
//   return (
//     <ContentModal media_type={media_type} id={id}>
//       <Badge
//         badgeContent={vote_average}
//         color={vote_average > 6 ? "primary" : "secondary"}
//       />
//       <img
//         className="poster"
//         src={poster ? `${img_300}/${poster}` : unavailable}
//         alt={title}
//       />
//       <b className="title">{title}</b>
//       <span className="subTitle">
//         {media_type === "tv" ? "TV Series" : "Movie"}
//         <span className="subTitle">{date}</span>
//       </span>
//     </ContentModal>
//   );
// };

// export default SingleContent;

// ! testing

import { Badge, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { img_300, unavailable } from "../../Config/Config";
import ContentModal from "../Content/ContentModal";
import "./SingleContent.css";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 300,
  },
}));

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const classes = useStyles();

  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      {!poster ? (
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      ) : (
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={title}
        />
      )}
      {!title ? (
        <React.Fragment>
          <Skeleton
            animation="wave"
            height={40}
            style={{ textAlign: "start" }}
          />
        </React.Fragment>
      ) : (
        <>
          <b className="title">{title}</b>
        </>
      )}
      {!media_type ? (
        <React.Fragment>
          <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
        </React.Fragment>
      ) : (
        <>
          <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
            <span className="subTitle">{date}</span>
          </span>
        </>
      )}

      {/* <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      /> */}
      {/* <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span> */}
    </ContentModal>
  );
};

export default SingleContent;
