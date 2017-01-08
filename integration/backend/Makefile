CURRENT_DIR = $(shell pwd)

BUILD_DIR = build
SRC_DIR = $(CURRENT_DIR)/../../backend

all: deploy clean

deploy:
	mkdir $(BUILD_DIR)
	cp -R $(SRC_DIR)/* $(BUILD_DIR)
	docker build -t osk/backend .

clean: 
	rm -rf $(BUILD_DIR)

.PHONY: all
