from sentence_transformers import SentenceTransformer, util
from data.faculty_data import faculty_data

model = None

def get_model():
    global model
    if model is None:
        print("Loading Faculty AI model...")
        model = SentenceTransformer("all-MiniLM-L6-v2")
        print("Faculty AI model loaded.")
    return model


def recommend_faculty(question):
    model = get_model()

    faculty_text = [
        f'{f["name"]} {f["department"]} {" ".join(f["subjects"])}'
        for f in faculty_data
    ]

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