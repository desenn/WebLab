module.exports = mongoose => {
    const Technology = mongoose.model(
        "technology",
        mongoose.Schema(
            {
                name: String,
                category: String,
                ring: String,
                descTech: String,
                descClass: String,
                published: Boolean,
                publDate: Date,
                creator: String,
                editor: String
            },
            { timestamps: true }
        )
    );

    return Technology;
};