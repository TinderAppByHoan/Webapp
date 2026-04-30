import {CustomAutocomplete} from "@/components/ui";

const AutocompleteGallery = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Autocomplete</h1>
                <p className="text-muted">A text input that provides real-time suggestions based on user input.</p>
            </div>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full"/>
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Usage</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm max-w-md">
                    <CustomAutocomplete
                        label="Tìm kiếm địa điểm"
                        placeholder="Nhập tên thành phố..."
                        items={[
                            {id: 1, label: "Hà Nội", description: "Thủ đô ngàn năm văn hiến"},
                            {id: 2, label: "TP. Hồ Chí Minh", description: "Hòn ngọc Viễn Đông"},
                            {id: 3, label: "Đà Nẵng", description: "Thành phố đáng sống nhất Việt Nam"},
                            {id: 4, label: "Đà Lạt", description: "Thành phố ngàn hoa"},
                            {id: 5, label: "Nha Trang", description: "Thành phố biển xinh đẹp"}
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}

export default AutocompleteGallery;
