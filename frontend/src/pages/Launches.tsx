import PageHeader from "../components/common/PageHeader";
import LaunchCard from "../components/launches/LaunchCard";

export default function Launches() {
  return (
    <div>
      <PageHeader
        title="Launches"
        description="Track upcoming and recent rocket launches."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <LaunchCard
          mission="Artemis II"
          rocket="SLS"
          date="2026"
          status="Scheduled"
        />

        <LaunchCard
          mission="Starlink 58"
          rocket="Falcon 9"
          date="August 2026"
          status="Ready"
        />

        <LaunchCard
          mission="Gaganyaan"
          rocket="LVM3"
          date="2026"
          status="Preparing"
        />
      </div>
    </div>
  );
}