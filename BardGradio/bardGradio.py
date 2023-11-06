import gradio as gr
from bardapi import Bard
from PIL import Image
import io

# Convert the NumPy array image to bytes that can be sent in a POST request
def convert_image_to_bytes(image):
    # Convert the NumPy array to a PIL Image
    pil_image = Image.fromarray(image.astype('uint8'), 'RGB')
    # Save the image to a bytes buffer
    buffer = io.BytesIO()
    pil_image.save(buffer, format="JPEG")
    # Get the byte data from the buffer
    image_bytes = buffer.getvalue()
    buffer.close()
    return image_bytes

# This function will use the Bard API to find similar products
def find_similar_products(image):
    # Convert the NumPy array image to bytes
    image_bytes = convert_image_to_bytes(image)
    
    bard_client = Bard(token='cwi4mx_wBlbWv8uTDtlL4RFi9M0pd4hMOmKr6WvqshMjvmv7qPiqP9luY1anEkyXVMfo0w.')  # Replace with your actual Bard API token
    response = bard_client.ask_about_image('Find me products similiar to this?', image_bytes)
    
    # Placeholder for processing the response to extract image URLs
    # You would need to parse the response and extract actual image URLs if they are provided.
    # For now, we're just returning the text content assuming no URLs are included.
    content = response['content']
    # Let's assume you've extracted the image URLs into a list called `image_urls`
    image_urls = []  # Replace this with the actual list of image URLs if available
    
    return content, image_urls

# Gradio interface setup
with gr.Blocks() as demo:
    gr.Markdown("Upload an image of a product to find similar products.")
    with gr.Row():
        image_input = gr.Image(type="numpy")  # We will receive the image as a NumPy array
        text_output = gr.Textbox(label="Similar Products Information")
        image_output = gr.Gallery(label="Similar Products Images")  # Placeholder for image display
    action_button = gr.Button("Find Similar Products")
    
    action_button.click(
        find_similar_products,
        inputs=image_input,
        outputs=[text_output, image_output]
    )

demo.launch()
