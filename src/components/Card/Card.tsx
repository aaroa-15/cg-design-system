import MuiCard, { type CardProps as MuiCardProps } from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";
import { liftStyles } from "./liftStyles";

export interface CardProps extends MuiCardProps {
  /** La card sube al pasar el mouse, con una sombra del color primario. */
  lift?: boolean;
}

const StyledCard = styled(MuiCard, {
  shouldForwardProp: (prop) => prop !== "lift",
})<Pick<CardProps, "lift">>(({ lift }) => (lift ? liftStyles : {}));

/** `Card` de Material UI con el estilo de CG, más la prop `lift`. */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  function Card(props, ref) {
    return <StyledCard ref={ref} {...props} />;
  },
);
