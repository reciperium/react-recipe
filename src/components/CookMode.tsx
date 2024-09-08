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
      {...(!isSupported && { title: "Cook Mode is not supported" })}
      {...props}
      checked={!released}
      onCheckedChange={() => (released === false ? release() : request())}
      disabled={!isSupported}
    />
  );
}
