from flask import Flask, render_template
from sales_force_api import objects


app = Flask(__name__)


@app.route("/")
def index():
    standard_objects = objects()
    return render_template("index.html", standard_objects=standard_objects)


if __name__ == "__main__":
    app.run(debug=False)

