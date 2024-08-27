from simple_salesforce import Salesforce
from dotenv import load_dotenv
import os

load_dotenv()

username = os.getenv('USER')
password = os.getenv('PASSWORD')
security_token = os.getenv('SECRET_TOKEN')

# Create a new Salesforce session
sf = Salesforce(username=username, password=password, security_token=security_token)



# Query to get all contacts without any specific filtering
# query = "SELECT Id, Email FROM Contact"
#
# # Using query_all_iter to fetch all records
# contact_records = sf.query_all_iter(query)
#
# # Iterate through the result set and print each contact's Id and Email
# for record in contact_records:
#     # print(f"Id: {record['Id']}, Email: {record['Email']}")
#     print(record)

def objects() -> list:
    # Describe Global to list all objects available in Salesforce
    all_objects = sf.describe()

    # Extracting standard objects by checking if they do not start with a custom prefix
    standard_objects = [obj['name'] for obj in all_objects['sobjects'] if not obj['custom']]

    # print(all_objects)

    # Printing the list of standard objects
    # print("Standard Objects in Salesforce:")
    # for obj in standard_objects:
    #     print(obj)
    return standard_objects
