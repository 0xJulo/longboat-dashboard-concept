import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


interface OverviewCardProps {
  title: string;
  data: string;
  subtitle: string;
}

function OverviewCard({ title, data, subtitle }: OverviewCardProps) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-2">
        <p>{data}</p>
        <p>{subtitle}</p>
      </CardContent>
    </Card>
  )
}

function Overview() {
  return (
    <div className="w-full flex flex-col gap-4 pb-4 px-6">
      <h2>Overview</h2>
      <div className="flex gap-4">
        <OverviewCard title="Total Earned" data="1000" subtitle="Total Earned" />
        <OverviewCard title="Total Distance" data="1000" subtitle="Total Distance" />
        <OverviewCard title="Market Value" data="1000" subtitle="Market Value" />
      </div>
    </div>
  );
};

// NFT section

interface NFTCardProps {
  image: string;
  nftNumber: string;
  price: string;
  availableRewards: string;
}


function NFTCard({ image, nftNumber, price, availableRewards }: NFTCardProps) {
  return (
    <Card className="p-0 w-[20rem]">
      <Image src={image} alt="NFT" width={500} height={500} className="w-full h-[20rem] rounded-t-lg object-cover " />
      <div className="flex flex-row gap-2">
        <p>{nftNumber}</p>
        <p>{price} WETH</p>
      </div>
      <p>Available Rewards: {availableRewards}</p>
      <div className="flex gap-2 w-full">
        <Button className="rounded-[0.4rem]">Manage</Button>
        <Button className="rounded-[0.4rem]">Claim</Button>
      </div>
    </Card>
  )
}

function MyNFTs() {
  return (
    <div className="pb-4 px-6">
      <h2>My NFTs</h2>
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
  );
};

function ContainerInformation() {
  return (
    <div className="pb-4 px-6">
      <h2>Container Information</h2>
      <Card className="bg-card w-full border border-border">
        info in here
      </Card>
    </div>
  );
};

function PageHeader() {
  return (
    <header className='h-[5rem] border-b border-border flex items-center justify-between py-4 px-6'>
      <h1>My Assets</h1>
      <div className="flex gap-2">
        <Button className="rounded-[0.4rem]">Buy Assets</Button>
        <Button className="rounded-[0.4rem]">Sell Assets</Button>
      </div>
    </header>
  )
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
