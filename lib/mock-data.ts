export const mockUser = {
  id: "1",
  name: "Nguyễn Thảo Linh",
  username: "thaolinh_cute",
  email: "thaolinh@example.com",
  gender: "female",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  cover: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&h=400&auto=format&fit=crop",
  bio: "Yêu màu hồng, ghét sự giả dối. Thích đi du lịch và chụp ảnh. ✨",
  followers: 1250,
  following: 450,
  postsCount: 42,
  location: "Hà Nội, Việt Nam",
  joinDate: "Tháng 1, 2024",
};

export const mockPosts = [
  {
    id: "p1",
    userId: "1",
    author: "Nguyễn Thảo Linh",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    content: "Một ngày nắng đẹp tại Hồ Tây... 🌸 #Hanoi #Relax",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    likes: 124,
    comments: 18,
    time: "2 giờ trước",
  },
  {
    id: "p2",
    userId: "1",
    author: "Nguyễn Thảo Linh",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    content: "Cafe cuối tuần cùng hội chị em bạn dì. Cảm ơn mọi người đã bên cạnh mình! ❤️",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    likes: 89,
    comments: 5,
    time: "Hôm qua",
  },
  {
    id: "p3",
    userId: "1",
    author: "Nguyễn Thảo Linh",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    content: "Đang đọc cuốn sách mới, cảm thấy rất truyền cảm hứng. Chúc mọi người một buổi tối tốt lành!",
    likes: 56,
    comments: 2,
    time: "2 ngày trước",
  }
];

export const mockFriends = [
  { id: "f1", name: "Trần Thu Hà", avatar: "https://i.pravatar.cc/150?u=f1", status: "online" },
  { id: "f2", name: "Lê Minh Tâm", avatar: "https://i.pravatar.cc/150?u=f2", status: "offline" },
  { id: "f3", name: "Phạm Hồng Nhung", avatar: "https://i.pravatar.cc/150?u=f3", status: "online" },
  { id: "f4", name: "Hoàng Anh Tuấn", avatar: "https://i.pravatar.cc/150?u=f4", status: "online" },
  { id: "f5", name: "Vũ Hải Yến", avatar: "https://i.pravatar.cc/150?u=f5", status: "offline" },
];
