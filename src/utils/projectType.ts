export type ProjectType = "own" | "third-party" | "freelance";

type Meta = {
  labelKey: "typeOwn" | "typeThirdParty" | "typeFreelance";
  className: string;
};

// own = destacado (accent); freelance = neutral visible; third-party (empleado) = apagado
const META: Record<ProjectType, Meta> = {
  own: { labelKey: "typeOwn", className: "border-accent/30 bg-accent/8 text-accent" },
  freelance: { labelKey: "typeFreelance", className: "border-ink/30 bg-ink/8 text-ink" },
  "third-party": { labelKey: "typeThirdParty", className: "border-line text-muted bg-transparent" },
};

export const projectTypeMeta = (type: ProjectType) => META[type];
