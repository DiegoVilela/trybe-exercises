function convertGrade(percentage) {
    if (percentage < 0 || percentage > 100) {
        return 'Invalid percentage.';
    } else if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else if (percentage >= 50) {
        return 'E';
    } else {
        return 'F';
    }
}

console.log('Grade:', convertGrade(-90.98));
