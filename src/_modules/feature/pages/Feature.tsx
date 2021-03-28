import { Header } from "components/Header";
import React from "react";

export const Feature: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <h1>
          This a very <strong>nice</strong> feature.
        </h1>
        <iframe
          title="nice gif btw"
          src="https://thumbs.gfycat.com/CoordinatedEnergeticChipmunk-size_restricted.gif"
          frameBorder={0}
          width={640}
          height={527}
          allowFullScreen
        ></iframe>
      </main>
    </>
  );
};
