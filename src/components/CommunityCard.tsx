import { IconBrandDiscordFilled, IconBrandX } from "@tabler/icons-react";
import { Community } from "../utils/constants";
import { useState } from "react";

interface CommunityCardProps {
  data: Community;
  index: number;
}

export function CommunityCard({ data }: CommunityCardProps) {
  const [isHovering, setHovering] = useState(false);
  const { name, description, social, imgUrl, ornamentIndex, color } = data;

  return (
    <div
      id="c-wrapper"
      className={`shadow-secondary8 relative w-full h-full cursor-pointer p-4 border-2 border-secondary8 rounded-xl`}
      style={{
        backgroundColor: color,
        transition: "box-shadow 300ms ease 100ms, transform 300ms ease 100ms",
        transform: `translate(${isHovering ? "0, 0" : "-6px, -6px"})`,
        boxShadow: `${isHovering ? "0 0" : "6px 6px"} 0`,
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        id="c-ornament"
        style={{
          right: isHovering ? "25%" : "10%",
          top: isHovering ? "10%" : "0",
          transition: "right 300ms ease, top 300ms ease",
        }}
        className="absolute -translate-y-1/2"
      >
        <img
          src={`./community/ornaments/vector${ornamentIndex}.svg`}
          alt="ornament"
        />
      </div>
      <div
        id="c-inner"
        className="flex gap-2 h-full"
        style={{ flexFlow: "column" }}
      >
        <div
          id="c-header"
          className="flex w-full gap-2"
          style={{ flexFlow: "column" }}
        >
          <div
            id="c-avatar"
            className="shadow-secondary8 border-2 border-secondary4 bg-secondary8 p-1 w-[60px] h-[60px] rounded-xl overflow-hidden shrink-0"
            style={{
              transition: "box-shadow 300ms ease, transform 300ms ease",
              transform: `translate(${isHovering ? "0, 0" : "-4px, -4px"})`,
              boxShadow: `${isHovering ? "0 0" : "4px 4px"} 0`,
            }}
          >
            <img
              src={`./community/${imgUrl}`}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-2xl font-black">{name}</p>
        </div>
        <p className=" line-clamp-3 font-medium">{description}</p>
        <div id="c-social" className="mt-auto flex gap-2 flex-wrap">
          {social.discord ? (
            <SocialBadge type="discord" value={social.discord} />
          ) : null}
          {social.twitter ? (
            <SocialBadge type="twitter" value={social.twitter} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

interface SocialBadgeProps {
  type: "twitter" | "discord";
  value: number;
}

export function SocialBadge({ type, value }: SocialBadgeProps) {
  return (
    <div
      id="c-social-badge"
      className="flex gap-2 items-center rounded-md text-white bg-secondary8 px-2 py-1 h-max w-max"
    >
      {type == "discord" ? (
        <IconBrandDiscordFilled size="1.125rem" />
      ) : (
        <IconBrandX size="1.125rem" />
      )}
      <p className="text-sm font-medium">{`${(value / 1000).toFixed(1)}k`}</p>
    </div>
  );
}
