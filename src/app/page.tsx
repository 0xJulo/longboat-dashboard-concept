import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface OverviewCardProps {
  title: string;
  data: string;
  subtitle: string;
}

function OverviewCard({ title, data, subtitle }: OverviewCardProps) {
  return (
    <Card className="flex-1 gap-2 px-4 py-6 rounded-[0.6rem] bg-[#222224] border border-border text-[#C1C1C1]">
      <h3 className="text-sm">{title}</h3>
      <div className="flex flex-row gap-2 items-end">
        <p className="text-4xl text-white font-semibold">{data}</p>
        <span className="text-[0.7rem]">{subtitle}</span>
      </div>
    </Card>
  );
}

function Overview() {
  return (
    <div className="w-full flex flex-col gap-4 pb-4 px-6">
      <h2>Overview</h2>
      <div className="flex gap-4">
        <OverviewCard
          title="Total Earned"
          data="$4,210.76"
          subtitle="Current APR: 21.6%"
        />
        <OverviewCard
          title="Total Distance"
          data="1,229km"
          subtitle="Across 7 containers"
        />
        <OverviewCard
          title="Market Value"
          data="$3,070.91"
          subtitle="1.23 WETH"
        />
      </div>
    </div>
  );
}

// NFT section

interface NFTCardProps {
  image: string;
  nftNumber: string;
  price: string;
  availableRewards: string;
}

function NFTCard({ image, nftNumber, price, availableRewards }: NFTCardProps) {
  return (
    <Card className="p-0 w-[20rem] text-primary">
      <Image
        src={image}
        alt="NFT"
        width={500}
        height={500}
        className="w-full h-[20rem] rounded-t-lg object-cover "
      />
      <div className="px-4 py-2">
        <div className="flex flex-row gap-2 ">
          <p>{nftNumber}</p>
          <p>{price} WETH</p>
        </div>
        <p>Available Rewards: {availableRewards}</p>
        <div className="flex gap-2 w-full">
          <Button className="rounded-[0.4rem]">Manage</Button>
          <Button className="rounded-[0.4rem]">Claim</Button>
        </div>
      </div>
    </Card>
  );
}

function MyNFTs() {
  return (
    <div className="pb-4 px-6">
      <h2>My NFTs</h2>
      <div className="flex gap-4">
        <NFTCard
          image="/488.png"
          nftNumber="488"
          price="1000"
          availableRewards="1000"
        />
        <NFTCard
          image="/61.png"
          nftNumber="488"
          price="1000"
          availableRewards="1000"
        />
      </div>
    </div>
  );
}


const sampleNFTs = [
  {
    nftNo: "488",
    nftLifetime: "13y 22d 7h",
    currentStatus: "Active",
    location: "Indian Ocean",
    journeyProgress: 50,
    totalRewardsEarned: "$456.35",
  },
  {
    nftNo: "61",
    nftLifetime: "14y 10d 3h",
    currentStatus: "Active",
    location: "Port of Signapore",
    journeyProgress: 20,
    totalRewardsEarned: "$93.07",
  },
];

interface TableCellProps {
  nftNo: string;
  nftLifetime: string;
  currentStatus: string;
  location: string;
  journeyProgress: number;
  totalRewardsEarned: string;
}

function NFTCell({
  nftNo,
  nftLifetime,
  currentStatus,
  location,
  journeyProgress,
  totalRewardsEarned,
}: TableCellProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{nftNo}</TableCell>
      <TableCell>{nftLifetime}</TableCell>
      <TableCell>{currentStatus}</TableCell>
      <TableCell>{location}</TableCell>
      <TableCell>{journeyProgress}</TableCell>
      <TableCell>{totalRewardsEarned}</TableCell>
    </TableRow>
  );
}

function ContainerTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">NFT No:</TableHead>
          <TableHead>NFT Lifetime</TableHead>
          <TableHead>Current Status</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Journey progress</TableHead>
          <TableHead>Total rewards earned</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleNFTs.map((nft) => (
          <NFTCell key={nft.nftNo} {...nft} />
        ))}
      </TableBody>
    </Table>
  );
}

function ContainerInformation() {
  return (
    <div className="pb-4 px-6">
      <h2>Container Information</h2>
      <Card className="bg-card w-full border border-border">
        <ContainerTable />
      </Card>
    </div>
  );
}

function PageHeader() {
  return (
    <header className="h-[5rem] border-b border-border flex items-center justify-between py-4 px-6">
      <h1>My Assets</h1>
      <div className="flex gap-2">
        <Button className="rounded-[0.4rem]">Buy Assets</Button>
        <Button className="rounded-[0.4rem]">Sell Assets</Button>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-6 h-full ">
      <PageHeader />
      <Overview />
      <MyNFTs />
      <ContainerInformation />
    </div>
  );
}
