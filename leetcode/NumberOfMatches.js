//O(n - 2) time O(1) space 
function numberOfMatches(n) {
    if (n <= 1) return 0;
    return getMatches(n, 0);
};

function getMatches(teams, matches) {
    if (teams === 2) return matches + 1;
    if (teams % 2 === 0) {
        matches += teams / 2;
        teams = teams / 2;
    } else {
        matches += (teams - 1) / 2;
        teams = ((teams - 1) / 2) + 1;
    }
    return getMatches(teams, matches);
}