"use client";
import React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Switch } from "./Switch";
import { useWakeLock } from "../hooks/use-wake-lock";

export type Props = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
>;

export default function CookMode({ ...props }: Props): React.ReactNode {
  const { isSupported, released, request, release } = useWakeLock();

  return (
    <Switch
      {...props}
      checked={!released}
      onCheckedChange={() => (released === false ? release() : request())}
      disabled={!isSupported}
      title={
        isSupported
          ? released
            ? "Cook Mode is off"
            : "Cook Mode is on"
          : "Cook Mode is not supported"
      }
    />
  );
}
