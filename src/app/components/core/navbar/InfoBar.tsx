import React from "react";

interface InfoBarProps {
  content: string | React.ReactNode;
}

const InfoBar: React.FC<InfoBarProps> = ({ content }) => {
  return (
    <div className="flex items-center justify-center h-full py-1 bg-[#0D9488] text-white">
      {typeof content === "string" ? (
        <div
          className="max-w-[1440px]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div className="max-w-[1440px]">{content}</div>
      )}
    </div>
  );
};

export default InfoBar;
