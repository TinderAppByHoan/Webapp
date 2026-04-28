import { Button, Card, Avatar } from "@heroui/react";
import { AppNavbar } from "@/components/layout/Navbar";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffcfd]">
      <AppNavbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar Left - Profile Info (Hidden on mobile) */}
        <div className="hidden md:block md:col-span-3 space-y-6">
          <Card className="border-pink-50 shadow-sm bg-white/50 backdrop-blur-sm">
            <Card.Content className="flex flex-col items-center py-8">
              <Avatar
                className="w-24 h-24 text-large mb-4 ring-4 ring-pink-100 ring-offset-2"
              >
                <Avatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Rose Henderson" />
                <Avatar.Fallback>RH</Avatar.Fallback>
              </Avatar>
              <h2 className="text-xl font-bold text-zinc-800">Rose Henderson</h2>
              <p className="text-zinc-500 text-sm mb-4">@rose_h</p>
              <div className="flex gap-4 w-full justify-around pt-4 border-t border-pink-50">
                <div className="text-center">
                  <p className="font-bold text-primary">124</p>
                  <p className="text-xs text-zinc-400">Posts</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-primary">12.5k</p>
                  <p className="text-xs text-zinc-400">Followers</p>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Main Feed */}
        <div className="col-span-1 md:col-span-6 space-y-6">
          {/* Create Post Card */}
          <Card className="border-pink-50 shadow-sm bg-white/50 backdrop-blur-sm overflow-visible">
            <Card.Content className="flex flex-row gap-4">
              <Avatar size="sm">
                <Avatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar.Fallback>RH</Avatar.Fallback>
              </Avatar>
              <div className="flex-1 bg-pink-50/50 rounded-2xl px-4 py-2 text-zinc-400 text-sm flex items-center cursor-pointer hover:bg-pink-100/50 transition-colors">
                What&apos;s on your mind, Rose?
              </div>
              <Button isIconOnly className="rounded-full" variant="primary">
                <Heart className="w-5 h-5" />
              </Button>
            </Card.Content>
          </Card>

          {/* Sample Post */}
          <Card className="border-pink-50 shadow-md">
            <Card.Header className="justify-between px-4 pt-4">
              <div className="flex gap-3">
                <Avatar size="md">
                  <Avatar.Image src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                  <Avatar.Fallback>SW</Avatar.Fallback>
                </Avatar>
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-zinc-800">Sophia Williams</h4>
                  <h5 className="text-small tracking-tight text-zinc-400">@sophia_w • 2h ago</h5>
                </div>
              </div>
              <Button isIconOnly variant="ghost" size="sm">
                <MoreHorizontal className="w-5 h-5 text-zinc-400" />
              </Button>
            </Card.Header>
            <Card.Content className="px-4 py-2 text-small text-zinc-600">
              <p className="mb-4">
                Just tried the new cafe in downtown! The strawberry latte is a must-try 🍓💖 #aesthetic #weekendvibes
              </p>
              <div className="relative w-full aspect-square md:aspect-video overflow-hidden rounded-xl">
                <Image
                  alt="Card background"
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000&auto=format&fit=crop"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Card.Content>
            <Card.Footer className="gap-3 px-4 pb-4">
              <Button variant="ghost" size="sm">
                <Heart className="w-4 h-4" />
                <span>1.2k</span>
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4 text-zinc-400" />
                <span>42</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 text-zinc-400" />
                <span>Share</span>
              </Button>
            </Card.Footer>
          </Card>
        </div>

        {/* Sidebar Right - Suggestions */}
        <div className="hidden lg:block lg:col-span-3 space-y-6">
          <Card className="border-pink-50 shadow-sm">
            <Card.Header className="px-4 pt-4">
              <h3 className="font-bold text-zinc-800">Who to follow</h3>
            </Card.Header>
            <Card.Content className="gap-4 px-4 pb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image src={`https://i.pravatar.cc/150?u=a042581f4e29026704${i}`} />
                      <Avatar.Fallback>U{i}</Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="text-xs font-bold text-zinc-800">User {i}</p>
                      <p className="text-[10px] text-zinc-400">Suggested for you</p>
                    </div>
                  </div>
                  <Button size="sm" variant="primary" className="rounded-full">Follow</Button>
                </div>
              ))}
            </Card.Content>
          </Card>
        </div>
      </main>
    </div>
  );
}
