import React from "react";
import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
  FacebookIcon,
  XIcon,
  HatenaIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

type Props = {
  url: string;
  title: string;
};

export const SnsShareIcons: React.FC<Props> = ({ url, title }) => {
  return (
    <div>
      <div>share</div>

      <div>
        <TwitterShareButton url={url} title={title}>
          <XIcon size={40} round />
        </TwitterShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <LineShareButton url={url} title={title}>
          <LineIcon size={40} round />
        </LineShareButton>
        <HatenaShareButton url={url} title={title}>
          <HatenaIcon size={40} round />
        </HatenaShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};
