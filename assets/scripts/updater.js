vars.updaters = {
    "1.0": function(code) {
        var saveCode = code

        saveCode.achievements = []
        saveCode.achievementData = {}
        saveCode.stats = {}

        return saveCode
    }
}
