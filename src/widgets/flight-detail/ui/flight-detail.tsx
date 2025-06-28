import { Icon } from "@/shared/ui/icon";
import { cn } from "@/shared/utils/cn";
import { useFlightDetail } from "../model/use-flight-detail";

const styles = {
  flexCenter: "flex flex-col items-center justify-center",
  flexBetween: "flex items-center justify-between",
  textPrimary: "text-foreground dark:text-foreground-dark transition-colors",
  textSecondary: "text-muted dark:text-muted-dark transition-colors",
  backgroundFull: "bg-background dark:bg-background-dark transition-colors",
  backgroundPrimary: "bg-primary dark:bg-primary-dark transition-colors",
  backgroundSecondary: "bg-secondary dark:bg-secondary-dark transition-colors",
} as const;

export const FlightDetail = () => {
  const { targetFlight, onClose } = useFlightDetail();

  if (!targetFlight) return null;

  return (
    <div className="flex">
      <div className="w-130 h-fit rounded-2xl overflow-hidden sticky top-0 text-white">
        <div className="min-h-90 bg-gradient-to-r from-[#336699] to-[#8ABFFF] p-5">
          <div
            className={cn(
              "flex items-center justify-between  p-5 rounded-2xl",
              styles.backgroundFull
            )}
          >
            <div className="flex flex-col">
              <div className="text-accent text-3xl">{targetFlight.airline}</div>
              <div
                className={cn("text-xl transition-colors", styles.textPrimary)}
              >
                {targetFlight.airplane.name}
              </div>
            </div>
            <button
              onClick={onClose}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                styles.backgroundSecondary,
                styles.textPrimary
              )}
            >
              <Icon name="close" />
            </button>
          </div>
          <img
            loading="lazy"
            src={targetFlight.airplane.image}
            alt={targetFlight.airplane.name}
            title={targetFlight.airplane.name}
          />
        </div>
        <div className={cn("min-h-100 p-4", styles.backgroundFull)}>
          <div className="grid grid-cols-2 gap-1 relative mb-2.5">
            <Icon
              name="separatorPlane"
              className="absolute left-1/2 top-12 -translate-x-6"
            />
            <div
              className={cn(
                "flex flex-col items-center p-6 rounded-tl-2xl",
                styles.backgroundPrimary
              )}
            >
              <div className={cn("font-medium text-5xl", styles.textPrimary)}>
                {targetFlight.from.code}
              </div>
              <div className={cn("text-2xl", styles.textPrimary)}>
                {targetFlight.from.city}
              </div>
              <div className={cn("text-base", styles.textSecondary)}>
                {targetFlight.from.timezone}
              </div>
            </div>
            <div
              className={cn(
                "flex flex-col items-center p-6 rounded-tr-2xl",
                styles.backgroundPrimary
              )}
            >
              <div className={cn("font-medium text-5xl", styles.textPrimary)}>
                {targetFlight.to.code}
              </div>
              <div className={cn("text-2xl", styles.textPrimary)}>
                {targetFlight.to.city}
              </div>
              <div className={cn("text-base", styles.textSecondary)}>
                {targetFlight.to.timezone}
              </div>
            </div>
            <div
              className={cn(
                "h-24 col-span-2 px-4 py-6 flex flex-col",
                styles.backgroundPrimary
              )}
            >
              <div className="w-full h-1 rounded-2xl flex relative">
                <div className="w-1/2 h-full bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l-2xl"></div>
                <div className="absolute -top-8 translate-y-full left-1/2 -translate-x-1/2">
                  <Icon name="plane" className={styles.textPrimary} />
                </div>
                <div
                  className={cn(
                    "w-1/2 h-full rounded-r-2xl",
                    styles.backgroundSecondary
                  )}
                ></div>
              </div>
              <div className={cn("mt-auto", styles.flexBetween)}>
                <div className={cn("text-xl", styles.textSecondary)}>
                  2 715 km · 3h 1m
                </div>
                <div className={cn("text-xl", styles.textSecondary)}>
                  2 715 km · 3h 1m
                </div>
              </div>
            </div>
            <div
              className={cn(
                "h-16 px-4 py-6",
                styles.flexBetween,
                styles.backgroundPrimary
              )}
            >
              <div className={cn("text-xl", styles.textSecondary)}>
                Scheduletd
              </div>
              <time
                className={cn("text-xl", styles.textPrimary)}
                dateTime="2025-06-24T08:15"
              >
                8:15
              </time>
            </div>
            <div
              className={cn(
                "h-16 px-4 py-6",
                styles.flexBetween,
                styles.backgroundPrimary
              )}
            >
              <div className={cn("text-xl", styles.textSecondary)}>Actual</div>
              <time
                className={cn("text-xl", styles.textPrimary)}
                dateTime="2025-06-24T08:24"
              >
                8:24
              </time>
            </div>
            <div
              className={cn(
                "h-16 px-4 py-6 rounded-bl-2xl",
                styles.flexBetween,
                styles.backgroundPrimary
              )}
            >
              <div className={cn("text-xl", styles.textSecondary)}>
                Scheduletd
              </div>
              <time
                className={cn("text-xl", styles.textPrimary)}
                dateTime="2025-06-24T13:25"
              >
                13:25
              </time>
            </div>
            <div
              className={cn(
                "h-16 px-4 py-6 rounded-br-2xl",
                styles.flexBetween,
                styles.backgroundPrimary
              )}
            >
              <div className={cn("text-xl", styles.textSecondary)}>
                Estimated
              </div>
              <time
                className={cn("text-xl", styles.textPrimary)}
                dateTime="2025-06-24T08:15"
              >
                13:23
              </time>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 relative mb-2.5">
            <div
              className={cn(
                "col-span-2 bg-[#FFFFFF1A] p-4 rounded-t-2xl",
                styles.backgroundSecondary
              )}
            >
              <h3 className={cn("text-xl", styles.textPrimary)}>
                Flight information
              </h3>
            </div>
            <div
              className={cn(
                "h-16 px-4 py-6",
                styles.flexBetween,
                styles.backgroundPrimary
              )}
            >
              <div className={cn("text-xl", styles.textPrimary)}>
                {targetFlight.airplane.name}
              </div>
            </div>
            <div
              className={cn(
                "h-16 px-4 py-6",
                styles.flexBetween,
                styles.backgroundPrimary
              )}
            >
              <div className={cn("text-xl", styles.textPrimary)}>
                🇮🇪 Ireland
              </div>
            </div>
            <div
              className={cn(
                "h-16 px-4 py-6 rounded-bl-2xl",
                styles.flexBetween,
                styles.backgroundPrimary
              )}
            >
              <div className={cn("text-xl", styles.textSecondary)}>Speed</div>
              <div className={cn("text-xl", styles.textPrimary)}>
                {targetFlight.route.speed} km/h
              </div>
            </div>
            <div
              className={cn(
                "h-16 px-4 py-6 rounded-br-2xl",
                styles.flexBetween,
                styles.backgroundPrimary
              )}
            >
              <div className={cn("text-xl", styles.textSecondary)}>
                Altitude
              </div>
              <div className={cn("text-xl", styles.textPrimary)}>
                {targetFlight.route.altitude} m
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <button
              className={cn(
                "gap-2 p-4 rounded-l-2xl text-xl",
                styles.textPrimary,
                styles.flexCenter,
                styles.backgroundPrimary
              )}
            >
              <Icon name="route" />
              Route
            </button>
            <button
              className={cn(
                "gap-2 p-4 text-xl",
                styles.textPrimary,
                styles.flexCenter,
                styles.backgroundPrimary
              )}
            >
              <Icon name="follow" />
              Follow
            </button>
            <button
              className={cn(
                "gap-2 p-4 text-xl",
                styles.textPrimary,
                styles.flexCenter,
                styles.backgroundPrimary
              )}
            >
              <Icon name="shared" />
              Share
            </button>
            <button
              className={cn(
                "gap-2 p-4 rounded-r-2xl text-xl",
                styles.textPrimary,
                styles.flexCenter,
                styles.backgroundPrimary
              )}
            >
              <Icon name="more" />
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
