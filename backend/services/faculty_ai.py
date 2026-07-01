from sentence_transformers import SentenceTransformer, util
from data.faculty_data import faculty_data

model = SentenceTransformer("all-MiniLM-L6-v2")


def recommend_faculty(question):

    faculty_text = []

    for faculty in faculty_data:
        faculty_text.append(
            faculty["name"] +
            " " +
            faculty["department"] +
            " " +
            " ".join(faculty["subjects"])
        )

    faculty_embeddings = model.encode(
        faculty_text,
        convert_to_tensor=True
    )

    question_embedding = model.encode(
        question,
        convert_to_tensor=True
    )

    scores = util.cos_sim(
        question_embedding,
        faculty_embeddings
    )[0]

    index = scores.argmax().item()

    return faculty_data[index]