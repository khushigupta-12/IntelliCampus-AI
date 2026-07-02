from data.faculty_data import faculty_data


def recommend_faculty(question):
    question = question.lower()

    best_faculty = faculty_data[0]
    best_score = -1

    for faculty in faculty_data:

        score = 0

        # Match subjects
        for subject in faculty["subjects"]:
            if subject.lower() in question:
                score += 2

        # Match department
        if faculty["department"].lower() in question:
            score += 1

        # Match faculty name
        if faculty["name"].lower() in question:
            score += 3

        if score > best_score:
            best_score = score
            best_faculty = faculty

    return best_faculty